import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function WebsitePage() {
  const [websiteData, setWebsiteData] = useState({})
  const params = useParams()
  useEffect(() => { 
    console.log(params.id);
    fetch(`/api/website/${params.id}`)
      .then(reponse => {
        return reponse.json();
      })
      .then(siteData => {
        setWebsiteData(siteData);
      });
  }, [])
  
  return (
    <section className='websiteLinkers'>
      <img src={websiteData.imageUrl}/>
      <div className='websiteLinkers__text'>
        <div>
          <h2 className='websiteLinkers__text__title'> { websiteData.name } </h2>
          <a href={websiteData.url} className="websiteLinkers__text__link">Acceder au site</a>  
        </div>
        <p> { websiteData.description } </p>
      </div>
    </section>
  )
}
