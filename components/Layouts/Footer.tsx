import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Footer: NextPage = () => {
  return (
    <footer className='footer-section bg_img bg_img_url'>
      <div className='footer-top'>
        <div className='container'>
          <div className='footer-wrapper d-flex flex-wrap align-items-center justify-content-md-between justify-content-center'>
            <div className='logo mb-3 mb-md-0'>
              <Link href='/'>
                <a>
                  <Image
                    src={`/images/logo.png`}
                    height={41}
                    width={180}
                    layout='fixed'
                    objectFit='contain'
                    alt='logo'
                  />
                </a>
              </Link>
            </div>
            <ul className='footer-links d-flex flex-wrap justify-content-center'>
              <li>
                <a href='games.html'>Games</a>
              </li>
              <li>
                <a href='terms-conditions.html'>Terms & Conditions</a>
              </li>
              <li>
                <a href='policy.html'>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='footer-wrapper d-flex flex-wrap justify-content-center align-items-center text-center'>
            <p className='copyright text-white'>
              Copyrights &copy; 2021 All Rights Reserved by{' '}
              <a href='#0' className=' text--base ms-2'>
                Viserlab
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='shapes'>
        <div className='shape1'>
          <Image
            src={`/images/footer/shape.png`}
            height={253}
            width={220}
            layout='fixed'
            objectFit='contain'
            alt='footer'
          />
        </div>

        {/* <img src="assets/images/footer/shape.png" alt="footer" className="shape1"> */}
      </div>
    </footer>
  )
}

export default Footer
