// resize image
// need install sharp
// 用在下载的图片大小不太一致
const sharp = require('sharp');
const fs = require('fs');
const names = ['dog', 'elephant', 'lion', 'panda', 'penguin', 'rabbit', 'wolf'];

+async function resizeImage({width = 500, height = 500}={}) {
    // 产生resize后的图片
    await Promise.all(names.map((name) => {
        return sharp(`${name}.jpeg`)
            .resize(width, height)
            .toFile(`${name}_temp.jpeg`);
    }))
    // 删除原来的图片
    names.forEach(name => fs.unlinkSync(`./${name}.jpeg`));
    // resize的图片重命名
    names.forEach(name => fs.renameSync(`./${name}_temp.jpeg`, `${name}.jpeg`));

}();