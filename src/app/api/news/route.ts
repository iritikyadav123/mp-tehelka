"use server"

import prisma from "@/db";

interface NewsProps {
    contentType?: string;
    title?: string;
    content?: string;
    imgUrl?: string | null;
    category?: string;
    type?: string;
    name?: string;
    topic?: string;
    ConPublic?: boolean;
    thumImgUrl?: string;
}

let date = new Date().getTime();
let dateNumber = Math.floor(date / 10000);
export async function addNews( data : any, Image : any, ThumImage: any) {
    if (data.contentType == 'breaking') {
        try {
            const news = await prisma.news.create({
                data: {
                    title: data.title,
                    description: data.content,
                    imgUrl: Image,
                    publish: true,
                    time: dateNumber,
                    type: data.type,
                    topic: data.category,
                    thumbnailUrl: ThumImage
                }
            })
            if (!news) {
                return false;
            }
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    } else if (data.contentType == 'story') {
        try {
            const story = await prisma.story.create({
                data: {
                    title: data.title,
                    description: data.content,
                    imgUrl: Image,
                    name: data.name,
                    topic: data.topic,
                    publish: true,
                    time: dateNumber,
                    thumbnailUrl: ThumImage
                }
            })
            if (!story) {
                return false;
            }
            return true
        } catch (err) {
            console.log(err);
            return false
        }
    } else if (data.contentType == 'article') {
        try {
            const article = await prisma.article.create({
                data: {
                    title: data.title,
                    description: data.content,
                    appearence: true,
                    publish: true,
                    userId: '1',
                    time: dateNumber
                }

            })
            if (!article) {
                return false;
            }
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}

export async function getHoverNews()  {
    try {
        const news = await prisma.news.findMany({
            take : 5,
            orderBy: {
                time: 'desc', 
              },
            where : {
                publish : true,
                type : "hover"
            },
            select : {
                imgUrl : true,
                title : true,
                id : true
            },
        })
        if(news) {
            return news;
        }
        console.log("nothing")
        return ;

    }catch (err) {
        console.log(err)
    }
}

export async function getFullNews(id : any) {
     try {
        const news = await prisma.news.findUnique({
            where : {
                id : id
            },
            select : {
                title : true ,
                description : true,
                imgUrl : true,
                time : true
            },
            
        })
        if(news) {
            console.log(news);
            return news
        }

     }catch (err) {
        console.log(err)
    }
}


 export async function storyCardNews() {
   try {
      const news = await prisma.story.findMany({
          take : 5,
          where : {
            publish : true
          },
          orderBy : {
             time : "desc"
          },
          select : {
            id : true,
            title : true,
            imgUrl : true,
            topic : true,
            name : true
          }
      })
      if(news) {
        return news;
      }

   }catch (err) {
    console.log(err)
}
}

export async function getStoryFullNews(id : string) {
    try {
        const news = await prisma.story.findFirst({
            where : {
                id : id
            },select : {
                title : true,
                imgUrl: true,
                description: true
            }
        })
        if(news) {
            return news
        }

    }catch (err) {
        console.log(err)
    }
}

export async function trandingNews(filter: string) {
       try {
        if(filter == 'non') {
            const filterNews = await prisma.news.findMany({
                where : {
                    type : "headline",
                },
                take : 5,
                orderBy : {
                    time : "desc"
                 },
                 select :{
                    id: true,
                    imgUrl: true,
                    title: true
                 }
            })
            if(filterNews) {
                return filterNews
            }
            return {
                id: "",
                title: "",
                imgUrl: ""
            }
        }else {
         const filterNews = await prisma.news.findMany({
             where : {
                 type : "headline",
                topic : filter
             },
             take : 5,
             orderBy : {
                 time : "desc"
              },
              select :{
                 id: true,
                 imgUrl: true,
                 title: true
              }
         }) 
         if(filterNews) {
            return filterNews
        }
        return {
            id: "",
            title: "",
            imgUrl: ""
        }
        }

       }catch(err) {
        console.log(err);
        return {
            id: "",
            title: "",
            imgUrl: ""
        }
       }
}

export async function ALLNoramlNew(filter: string) {
    try {
        if(filter == 'non') {
            const filterNews = await prisma.news.findMany({
                where : {
                    type : "normal",
                },
                take : 15,
                orderBy : {
                    time : "desc"
                 },
                 select :{
                    id: true,
                    thumbnailUrl: true,
                    title: true
                 }
            })
            if(filterNews) {
                return filterNews
            }
            return {
                id: "",
                title: "",
                thumbnailUrl: ""
            }
        }else {
         const filterNews = await prisma.news.findMany({
             where : {
                 type : "normal",
                topic : filter
             },
             take : 15,
             orderBy : {
                 time : "desc"
              },
              select :{
                 id: true,
                 thumbnailUrl: true,
                 title: true
              }
         }) 
         if(filterNews) {
            return filterNews
        }
        return {
            id: "",
            title: "",
            thumbnailUrl: ""
        }
        }

       }catch(err) {
        console.log(err);
        return {
            id: "",
            title: "",
            imgUrl: ""
        }
       }
}