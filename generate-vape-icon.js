const sharp = require('sharp');

const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="512" height="512" rx="112" fill="#0D1117"/>

  <!-- Outer glow -->
  <circle cx="256" cy="256" r="180" fill="rgba(45,212,191,0.04)"/>

  <!-- Vape pen - centered and scaled -->
  <g transform="translate(216, 56)">
    <!-- Mouthpiece -->
    <rect x="24" y="0" width="32" height="28" rx="8" fill="#0D1117" stroke="#2A3140" stroke-width="1"/>
    <rect x="20" y="26" width="40" height="10" rx="5" fill="#2A3140" stroke="#333B4A" stroke-width="0.5"/>

    <!-- Top cap -->
    <rect x="16" y="36" width="48" height="18" rx="6" fill="#2A3140"/>

    <!-- Main body -->
    <rect x="14" y="54" width="52" height="280" rx="10" fill="#1E2430"/>

    <!-- Accent stripes -->
    <rect x="14" y="140" width="52" height="6" rx="3" fill="#2DD4BF" opacity="0.7"/>
    <rect x="14" y="152" width="52" height="3" rx="1.5" fill="#2DD4BF" opacity="0.3"/>

    <!-- Brand P -->
    <rect x="24" y="190" width="32" height="60" rx="6" fill="#2A3140" opacity="0.3"/>
    <text x="40" y="230" text-anchor="middle" fill="#2DD4BF" font-size="30" font-weight="700" font-family="SF Pro Rounded, -apple-system, sans-serif" opacity="0.6">P</text>

    <!-- Airflow ring -->
    <rect x="18" y="334" width="44" height="8" rx="4" fill="#2A3140" stroke="#333B4A" stroke-width="0.5"/>

    <!-- Battery section -->
    <rect x="14" y="342" width="52" height="46" rx="10" fill="#141820"/>

    <!-- LED -->
    <circle cx="40" cy="365" r="6" fill="#2DD4BF" opacity="0.8"/>
    <circle cx="40" cy="365" r="10" fill="#2DD4BF" opacity="0.15"/>

    <!-- Bottom cap -->
    <rect x="22" y="386" width="36" height="8" rx="4" fill="#2A3140" stroke="#333B4A" stroke-width="0.5"/>

    <!-- Charging port -->
    <rect x="32" y="392" width="16" height="4" rx="2" fill="#141820"/>
  </g>

  <!-- Small cloud wisps at top -->
  <circle cx="252" cy="48" r="8" fill="#2DD4BF" opacity="0.12"/>
  <circle cx="264" cy="38" r="6" fill="#2DD4BF" opacity="0.08"/>
  <circle cx="244" cy="34" r="5" fill="#2DD4BF" opacity="0.06"/>
</svg>
`;

async function generate() {
  const buf = Buffer.from(svgIcon);

  // Generate 192x192 and 512x512 versions
  await sharp(buf).resize(512, 512).png().toFile('vape-icon-512.png');
  await sharp(buf).resize(192, 192).png().toFile('vape-icon.png');
  await sharp(buf).resize(180, 180).png().toFile('vape-apple-touch-icon.png');

  console.log('Vape icons generated: vape-icon.png (192), vape-icon-512.png (512), vape-apple-touch-icon.png (180)');
}

generate().catch(console.error);
