// optimize-all.mjs - Guia para otimizar todas
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const iconsPath = 'src/assets/icons';
const largeImages = [];

console.log('🔥 IMAGENS GIGANTES PARA OTIMIZAR URGENTE:\n');

readdirSync(iconsPath).forEach(file => {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const filePath = join(iconsPath, file);
        const stats = statSync(filePath);
        const sizeKB = stats.size / 1024;

        if (sizeKB > 300) { // > 300KB
            largeImages.push({ file, sizeKB: sizeKB.toFixed(1) });
        }
    }
});

// Ordena do maior para menor
largeImages.sort((a, b) => b.sizeKB - a.sizeKB);

largeImages.forEach(img => {
    console.log(`📍 ${img.file}: ${img.sizeKB} KB`);
    console.log(`   👉 https://iloveimg.com/pt/comprimir-imagem`);
    console.log(`   💡 Converta para .JPG e redimensione para 1200px max\n`);
});

console.log(`🎯 TOTAL: ${largeImages.length} imagens grandes`);
console.log(`📦 Economia estimada: ~${(largeImages.reduce((sum, img) => sum + parseFloat(img.sizeKB), 0) * 0.85 / 1024).toFixed(1)} MB`);