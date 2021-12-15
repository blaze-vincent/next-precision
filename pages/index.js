import AboutPreview from "../components/aboutPreview/aboutPreview"
import ServicesPreview from "../components/servicesPreview/servicesPreview"
import ImagesEditor from "../components/imagesEditor/imagesEditor"
import styles from './page.module.css'

export default function Home(){
  return (<div className={styles.container}>
    <AboutPreview />
    <ServicesPreview services={
      [
        {
            "_id": "61a1962ca6352a01173c6d87",
            "name": "Painting",
            "description": "If you are in the market to hire a painting contractor, you deserve informed, quality work that will last in return for your money. Interior or exterior; wielding our years of experience, we give each of our projects the consideration and care necessary to produce end results you'll be proud of.",
            "secondaryStatus": false,
            "__v": 0
        },
        {
            "_id": "61a1962ca6352a01173c6d88",
            "name": "Epoxy Floors",
            "description": "Epoxy makes for a durable, low maintenance floor coating that retains its beauty under much harsher conditions for much longer than alternatives. As such, they are an ideal floor coating solution for many types of business. Our breadth of experience with epoxy floor coatings enables us to choose the right floor coating solution for your business and establish accurate deadlines to ensure your business minimal downtime.",
            "secondaryStatus": false,
            "__v": 0
        },
        {
            "_id": "61a1962ca6352a01173c6d89",
            "name": "Epoxy Walls",
            "description": "Epoxy as a coating for walls offers many of the same benefits it does for floors. Businesses that commonly require this kind of protection for walls include correctional institutions, food preparation facilities, and hospitals. We can ensure your business gets the epoxy wall coating solution appropriate for its needs.",
            "secondaryStatus": false,
            "__v": 0
        }
      ]
    }
    />
    
    <h2 className={styles.h2}>Gallery</h2>
    <ImagesEditor inHome={true}></ImagesEditor>
  </div>)
}