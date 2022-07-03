import React, { useEffect, useState } from 'react'
import Website from '../component/Website';

export default function MyWebsite() {
  const [listWebsites, setListWebsites] = useState([]);
  useEffect(() => {
    fetch("/api/website")
      .then(reponse => {
        return reponse.json();
      })
      .then(lstSite => {
        setListWebsites(lstSite);
      })
  }, [])
  
  return (
    <section className='WebsitePage'>
      {listWebsites.map((dataSite) => {
        return <Website key={dataSite._id} data={dataSite}/>
      })}
    </section>
  )
};
