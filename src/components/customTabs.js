import { Tab, Tabs } from "react-bootstrap"
import MyGallery from "./myGallery"

export const CustomTabs=(props)=>{
    return(
      <Tabs defaultActiveKey="rooms" fill>
        {props.tabs.map(tab=>(
          <Tab eventKey={tab.key} title={tab.title} fill>
          <MyGallery  photos={tab.photos}/>
        </Tab>
        ))}
      </Tabs>
    )
  }