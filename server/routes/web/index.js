module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')

    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')

    router.get('/news/init', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.find().where({
            parent: parent
        }).lean()
        const newsTitles = ["赛季奖励领取调整说明及未领取奖励补发公告", "【已开服】1月9日正式服“强者之路”版本更新公告", "强者之路开启 S18全新赛季来临 超多福利等你来拿", "【正式服】“强者之路”版本异常问题说明", "部分机型王者时刻创意编辑功能关闭调优说明"]
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0,2),
                title: title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })


    app.use('/web/api', router)
}