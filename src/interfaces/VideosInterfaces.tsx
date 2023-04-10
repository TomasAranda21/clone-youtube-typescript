export interface VideosProps{
    statistics: {
        viewCount: number 
    }
    snippet : {
        thumbnails : {
        maxres: {
            url: string
        } 
        medium: {
            url: string
        } 
    }
    title: string
    channelTitle: string
    publishedAt: number
    }
}
