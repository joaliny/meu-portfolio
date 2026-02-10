// optimize.mjs - ES Module version
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const iconsPath = 'src/assets/icons';

console.log('📷 IMAGENS PARA OTIMIZAR:\n');

try {
    const files = readdirSync(iconsPath);

    files.forEach(file => {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const filePath = join(iconsPath, file);
            const stats = statSync(filePath);
            const sizeKB = (stats.size / 1024).toFixed(1);

            console.log(`👉 ${file}: ${sizeKB} KB`);

            // Recomendações
            if (stats.size > 500 * 1024) { // > 500KB
                console.log(`   ⚠️  MUITO GRANDE! Otimize em: https://tinypng.com`);
                if (file.includes('joaliny')) {
                    console.log(`   💡 CONVERTA para .JPG (ficará 80% menor)`);
                }
            }
        }
    });

    console.log('\n🎯 AÇÃO RECOMENDADA:');
    console.log('1. Vá em https://tinypng.com');
    console.log('2. Arraste TODAS as imagens listadas acima');
    console.log('3. Baixe o ZIP otimizado');
    console.log('4. Substitua na pasta src/assets/icons/');
    console.log('5. Execute: npm run build');

} catch (error) {
    console.error('Erro:', error.message);
}