/**
 * UI Prompt Formatter & Color Token Compiler
 * 
 * Usage:
 *   node scripts/ui_formatter.js [category] [id] [--theme=theme_name] [--app_domain="Target App"]
 * 
 * Examples:
 *   node .agents/skills/03-ui-skill/scripts/ui_formatter.js home home_personalized_greeting_mood_tracker_grid --app_domain="To-Do App"
 */

const fs = require('fs');
const path = require('path');

const candidateCatalogs = [
  path.join(process.cwd(), 'design_catalog.json'),
  path.join(process.cwd(), 'docs', '04-ui-design', 'design_catalog.json'),
  path.join(__dirname, '..', 'resources', 'design_catalog.json'),
  path.join(__dirname, '..', '..', '03-ui-skill', 'resources', 'design_catalog.json'),
  path.join(__dirname, '..', '..', 'ui-skill', 'resources', 'design_catalog.json')
];

const CATALOG_PATH = candidateCatalogs.find(p => fs.existsSync(p)) || candidateCatalogs[0];

const candidateThemes = [
  path.join(process.cwd(), 'project_theme.json'),
  path.join(process.cwd(), 'project-theme.json'),
  path.join(process.cwd(), 'app_theme.json'),
  path.join(process.cwd(), 'app-theme.json'),
  path.join(process.cwd(), 'docs', '04-ui-design', 'project_theme.json'),
  path.join(process.cwd(), 'docs', '04-ui-design', 'app_theme.json')
];

const THEME_PATH = candidateThemes.find(p => fs.existsSync(p));

const DEFAULT_THEME_CONFIG = {
  app_name: "App Workspace",
  active_theme: "default_theme",
  active_preset: "vibe_preset_01",
  themes: {
    default_theme: {
      name: "Default Startup Theme",
      color_tokens: {
        primary_brand_accent: "#00E5FF",
        primary_accent: "#FF6D00",
        surface_background: "#090A0F",
        surface_elevation_1: "#141722",
        surface_container: "#181B26",
        surface_container_dark: "#10121A",
        on_surface_high: "#FFFFFF",
        on_surface_medium: "#A0A5B5",
        on_surface_muted: "#606575",
        outline_subtle: "rgba(255, 255, 255, 0.08)"
      }
    }
  }
};

function loadJSON(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found at ${filePath}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function loadThemeConfig(filePath) {
  if (filePath && fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return DEFAULT_THEME_CONFIG;
}

function applyAppThemeToSpec(specObj, colorTokens) {
  if (!specObj || typeof specObj !== 'object') return specObj;

  if (Array.isArray(specObj)) {
    return specObj.map(item => applyAppThemeToSpec(item, colorTokens));
  }

  const result = {};
  for (const [key, value] of Object.entries(specObj)) {
    if (typeof value === 'object' && value !== null) {
      result[key] = applyAppThemeToSpec(value, colorTokens);
    } else if (typeof value === 'string' && colorTokens[value]) {
      result[key] = `${colorTokens[value]} /* role: ${value} */`;
    } else {
      result[key] = value;
    }
  }

  if (specObj.color_role && colorTokens[specObj.color_role]) {
    result.resolved_hex_color = colorTokens[specObj.color_role];
  }

  return result;
}

function generateUIPrompt(spec, themeConfig, activeThemeKey, appDomain, surfaceType = 'mobile') {
  const profiles = themeConfig.theme_profiles || themeConfig.themes || DEFAULT_THEME_CONFIG.themes;
  const activeProfileKey = activeThemeKey || themeConfig.active_theme_profile || themeConfig.active_theme || Object.keys(profiles)[0] || 'default_theme';
  const activeTheme = profiles[activeProfileKey] || Object.values(profiles)[0] || DEFAULT_THEME_CONFIG.themes.default_theme;
  const colorTokens = activeTheme.colors || activeTheme.color_tokens || DEFAULT_THEME_CONFIG.themes.default_theme.color_tokens;
  const themeInjectedSpec = applyAppThemeToSpec(spec, colorTokens);

  let lockedNav = null;
  if (themeConfig.locked_navigation_bar) {
    const rawNav = JSON.parse(JSON.stringify(themeConfig.locked_navigation_bar));
    const currentCategory = (spec.screen_type || '').toLowerCase();
    if (rawNav.tabs && Array.isArray(rawNav.tabs)) {
      rawNav.tabs = rawNav.tabs.map(tab => ({
        ...tab,
        active_state: (tab.id || tab.tab_id || '').toLowerCase() === currentCategory,
        active_pill_highlight: (tab.id || tab.tab_id || '').toLowerCase() === currentCategory
      }));
    }
    lockedNav = applyAppThemeToSpec(rawNav, colorTokens);
  }

  const isWebSurface = surfaceType === 'website' || surfaceType === 'webapp' || surfaceType === 'landing';
  const effectiveNav = lockedNav || themeInjectedSpec.single_bottom_navigation_bar;
  const targetAppName = appDomain ? `${themeConfig.app_name} (${appDomain})` : themeConfig.app_name;
  const svgRegistry = themeConfig.svg_registry || {};
  const primaryBrandAccent = colorTokens.primary_brand_accent || colorTokens.primary_accent || '#00E5FF';
  const surfaceBackground = colorTokens.surface_background || '#090A0F';

  const viewportTitle = isWebSurface
    ? 'Desktop Web Interface (16:9 Widescreen Landscape - 1920x1080)'
    : 'Mobile Smartphone App Screen (Vertical 9:16 Portrait)';

  const canvasInstruction = isWebSurface
    ? `Canvas Type: Desktop Web Interface (16:9 Widescreen Landscape - 1920x1080).
Render a modern responsive desktop web browser view with top navigation header, hero section, multi-column content grid, and web footer. Do NOT compress into a narrow mobile phone container.`
    : `Canvas Type: Mobile Phone App Screen (Narrow Vertical Portrait 9:16 aspect ratio).
Do NOT render a widescreen desktop dashboard, web browser canvas, or wide tablet container. The generated UI canvas MUST be a standard narrow vertical smartphone app screen.`;

  const navInstruction = isWebSurface
    ? `[LOCKED WEB NAVIGATION & FOOTER STRUCTURE]
Render a top sticky web navigation header bar (Logo left, Nav items center, CTAs right) and a multi-column web footer (Product links, Legal triad, Social icons, Copyright notice).`
    : (effectiveNav ? `
[LOCKED APP NAVIGATION SYSTEM - 100% CONSISTENT ON ALL APP SCREENS]
IMPORTANT: This is the app's locked navigation bar. Render ONLY this single floating stadium pill navigation bar at the bottom of the screen. Do NOT append any default AI template navigation bar!
${JSON.stringify(effectiveNav, null, 2)}
` : '');

  return `=== GENERATIVE UI PROMPT SPECIFICATION ===
Target Platform: ${viewportTitle}
Target App/Project Name: ${targetAppName}
Active Theme Profile: "${activeTheme.name || activeProfileKey}" (${activeProfileKey})
Design Title: ${spec.title}${appDomain ? ` (Adapted to ${appDomain})` : ''}
Target Viewport: ${viewportTitle}
Screen Category: ${spec.screen_type || spec.component_type}
${appDomain ? `
[DOMAIN ADAPTATION DIRECTIVE - TARGET DOMAIN: "${appDomain}"]
CRITICAL: Adapt all content placeholders, section titles, card labels, list items, and action buttons from the reference layout blueprint below to fit a "${appDomain}".
1. Keep the EXACT visual structure, card containers, flex/grid layouts, component spacing, and surface navigation.
2. Translate all domain-specific text and placeholders into "${appDomain}" equivalents.
` : ''}
[CRITICAL CANVAS ASPECT RATIO INSTRUCTION]
${canvasInstruction}

[GOAL & INSTRUCTIONS FOR GENERATIVE UI ENGINE]
Generate a high-fidelity UI layout using the exact structural layout, component positions, and element scale below. Apply the specified project color palette and styling tokens into the design.

[EMBEDDED MATHEMATICAL SVG VECTOR ICON MANDATE]
CRITICAL MANDATORY DIRECTIVE FOR ALL ICONS:
- EVERY SINGLE ICON on this screen MUST BE DRAWN USING EXPLICIT MATHEMATICAL SVG PATH DATA (<svg width="..." height="..." viewBox="0 0 24 24"><path d="..."/></svg>).
- Do NOT use emojis, text placeholders, or generic font names for icons under any circumstances!

[PROJECT CENTRAL SVG REGISTRY (PROJECT_THEME.JSON / APP_THEME.JSON)]
${JSON.stringify(svgRegistry, null, 2)}

[PROJECT DESIGN SYSTEM COLOR PALETTE]
- Primary Brand Accent: ${primaryBrandAccent}
- Primary Accent: ${colorTokens.primary_accent || colorTokens.primary_brand_accent || '#FF6D00'}
- Primary Accent Hover: ${colorTokens.primary_accent_hover || '#059669'}
- Surface Background: ${surfaceBackground}
- Surface Card: ${colorTokens.surface_card || colorTokens.surface_container || '#181B26'}
- Elevated Surface: ${colorTokens.surface_elevated || colorTokens.surface_elevation_1 || '#141722'}
- Container Surface: ${colorTokens.surface_container || colorTokens.surface_card || '#181B26'}
- Dark Container Surface: ${colorTokens.surface_container_dark || '#10121A'}
- High-Contrast Text: ${colorTokens.on_surface_high || '#FFFFFF'}
- Medium Text: ${colorTokens.on_surface_medium || '#A0A5B5'}
- Muted Text: ${colorTokens.on_surface_muted || '#606575'}
- Subtle Border / Outline: ${colorTokens.border_subtle || colorTokens.outline_subtle || 'rgba(255, 255, 255, 0.08)'}

[EXACT LAYOUT & COMPONENT BLUEPRINT (WITH APPLIED PROJECT THEME)]
Background Configuration:
${JSON.stringify(themeInjectedSpec.background, null, 2)}

Layout Structure:
${JSON.stringify(themeInjectedSpec.layout_structure, null, 2)}

Main Page Sections:
${JSON.stringify(themeInjectedSpec.sections || themeInjectedSpec.tabs || themeInjectedSpec, null, 2)}

${navInstruction}

[STRICT GENERATION CONSTRAINTS & ANTI-DUPLICATION RULES]
1. TARGET VIEWPORT CANVAS: Render ${viewportTitle} ONLY.
2. ZERO ANIMATION RULE: Render static UI ONLY. Absolutely NO animations, NO motion graphics, NO dynamic keyframe loops, and NO pulsing or glowing movement. The output must be completely static.
3. ZERO SHADOWS & ZERO GLOW RULE: Render flat UI surfaces ONLY. Absolutely NO drop-shadows, NO box-shadows, NO ambient glows, NO neon glow halos, and NO outer/inner glow effects. All cards, buttons, and containers must be completely flat with clean borders or solid color fills.
4. NAVIGATION CONSISTENCY: ${isWebSurface ? 'Render a single top web header and multi-column web footer.' : 'Render EXACTLY ONE bottom navigation bar on the entire screen using the locked stadium pill spec above.'}
5. SINGLE TOP HEADER RULE: Do NOT duplicate the top header bar.
6. Reproduce the exact layout flex/grid structure, stacking order, element padding, and positioning as specified in the blueprint above.
7. Use the target project's exact color values provided above (${primaryBrandAccent} for primary elements, ${surfaceBackground} for main surface).
8. Do NOT invent extra section cards or duplicate navigation elements outside of the specified blueprint.
============================================================`;
}

function main() {
  const catalog = loadJSON(CATALOG_PATH);
  const themeConfig = loadThemeConfig(THEME_PATH);

  const rawArgs = process.argv.slice(2);
  const flags = rawArgs.filter(a => a.startsWith('--'));
  const args = rawArgs.filter(a => !a.startsWith('--'));

  const profiles = themeConfig.theme_profiles || themeConfig.themes || DEFAULT_THEME_CONFIG.themes;
  let activeThemeKey = themeConfig.active_theme_profile || themeConfig.active_theme || Object.keys(profiles)[0];
  const themeFlag = flags.find(f => f.startsWith('--theme='));
  if (themeFlag) activeThemeKey = themeFlag.split('=')[1];

  let appDomain = null;
  const domainFlag = flags.find(f => f.startsWith('--app_domain=') || f.startsWith('--domain='));
  if (domainFlag) appDomain = domainFlag.split('=')[1].replace(/^["']|["']$/g, '');

  let surfaceType = themeConfig.target_surface || 'mobile';
  const surfaceFlag = flags.find(f => f.startsWith('--surface=') || f.startsWith('--target='));
  if (surfaceFlag) surfaceType = surfaceFlag.split('=')[1].replace(/^["']|["']$/g, '');

  if (args.length < 2) {
    const activeProfile = profiles[activeThemeKey] || Object.values(profiles)[0] || {};
    console.log(`\n🎨 Active Project Theme: "${activeProfile.name || activeThemeKey}"`);
    console.log(`🌐 Target Surface Viewport: "${surfaceType}"`);
    console.log('\n📱 Available Screen Specs in Catalog:');
    for (const [cat, list] of Object.entries(catalog.screens)) {
      console.log(`\nCategory [${cat}]:`);
      list.forEach(s => console.log(`  - ID: "${s.id}" | Title: ${s.title}`));
    }
    return;
  }

  const [category, id] = args;
  let targetSpec = null;
  if (catalog.screens[category]) targetSpec = catalog.screens[category].find(item => item.id === id);
  if (!targetSpec && catalog.components[category]) targetSpec = catalog.components[category].find(item => item.id === id);

  if (!targetSpec) {
    console.error(`\n❌ Spec with ID "${id}" in category "${category}" not found.`);
    return;
  }

  console.log(generateUIPrompt(targetSpec, themeConfig, activeThemeKey, appDomain, surfaceType));
}

main();
