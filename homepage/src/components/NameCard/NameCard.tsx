import icon from '../../assets/icon.png';
import '../../index.css'

export function MobileNameCard() {
  return (
    <div className="bg-white flex flex-col items-center w-[330px] h-[546px]">
        <br />
        <img src={icon} alt="icon" width={180} height={180} className="" />
        <h2 className="text-[24px]">湊 颯</h2>
        <p className="text-sm text-gray-500">みなと そら</p>
        <p>--------</p>
        <h4>金沢大学 理工学類<br />電子情報通信学類</h4>
        <br />
        <a href="mailto:minatosora0409@gmail.com" className="">Mail minatosora0409@gmail.com</a>
        <a href="https://www.instagram.com/sooooora_min?igsh=b2FmaThxaXB5cDhq&utm_source=qr">Instagram sooooora_min</a>
        <a href="https://x.com/sooooora_min?s=21">X sooooora_min</a>
        <a href="https://github.com/soooooramin">GitHub soooooramin</a>
        <a href="https://www.linkedin.com/in/sora-minato">LinkedIn Sora Minato</a>
        <a href="https://qiita.com/soooooramin">Qiita soooooramin</a>
    </div>
  )
}

export function PCNameCard() {
  return (
    <div className="bg-white flex flex-col items-center w-[495px] h-[819px]">
        <br />
        <img src={icon} alt="icon" width={270} height={270}className="w=[40px]" />
        <h1 className="text-[36px]">湊 颯</h1>
        <p className='text-gray-500'>みなと そら</p>
        <div className="flex flex-col items-center text-[25px]" >
          <p>--------</p>
          <h4>金沢大学 理工学類<br />電子情報通信学類</h4>
          <br />
          <a href="mailto:minatosora0409@gmail.com">Mail minatosora0409@gmail.com</a>
          <a href="https://www.instagram.com/sooooora_min?igsh=b2FmaThxaXB5cDhq&utm_source=qr">Instagram sooooora_min</a>
          <a href="https://x.com/sooooora_min?s=21">X sooooora_min</a>
          <a href="https://github.com/soooooramin">GitHub soooooramin</a>
          <a href="https://www.linkedin.com/in/sora-minato">LinkedIn Sora Minato</a>
          <a href="https://qiita.com/soooooramin">Qiita soooooramin</a>
        </div>
    </div>
  )
}