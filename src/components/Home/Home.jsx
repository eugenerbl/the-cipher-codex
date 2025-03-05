import Gallery from '../Gallery/CipherGallery';


function Home() {

  return (
    // Fragment to wrap all components so React is happy
    <> 
      <h1>The Cipher Codex</h1>
      <p>
        Encrypt, decrypt, and learn about well-known ciphers.
      </p>
      <Gallery/>
    </>
  )
}

export default Home