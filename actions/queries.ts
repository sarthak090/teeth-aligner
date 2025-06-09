'use server'

export const getGlobalData = async () => {
    const url=process.env.NEXT_PUBLIC_CMS_URL + '/custom/v1/global-data'
 
    const res = await fetch(url)

    const data = await res.json()
    return data
}

export const getHomePageData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/pages/53?acf_format=standard`)
    const data = await res.json()
    return data
}


export const getAboutPageData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/pages/263?acf_format=standard`)
    const data = await res.json()
    return data
}