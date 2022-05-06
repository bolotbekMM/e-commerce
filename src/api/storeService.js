import { axiosInstance } from './axiosInstance'


export const getGalleryImagesRequest = () => {
    return axiosInstance.get('sliderImages2.json')
 }

 export const getLogoRequest = () => {
    return axiosInstance.get('logos.json')
 }

 export const getInfoSectionRequest = () => {
    return axiosInstance.get('infoSection.json')
 }
 export const getNashiPreimushestvaRequest = () => {
    return axiosInstance.get('nashiPreimushestva.json')
 }
 export const getAboutUsRequest = () => {
    return axiosInstance.get('aboutus.json')
 }

 export const getNewsDataRequest = () => {
    return axiosInstance.get('newsData.json')
 }

 export const getAccardionDataRequest = () => {
    return axiosInstance.get('accordionData.json')
 }

 export const getCollectionRequest = () => {
    return axiosInstance.get('collections.json')
 }