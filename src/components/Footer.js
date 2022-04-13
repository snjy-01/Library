import React from 'react'

export default function Footer() {
  let footerstyle = {
    position: "relative",
    top: '50vh',
    width: '100%'
  }
  return (
    <footer className='bg-dark text-light py-4' style={footerstyle}>
      <p className='text-center'>
        Copyright:2022 ©<br/>
         Library_site.com<br/>
         sanjay dhakad
      </p>
    </footer>
  )
}
