import Image from "next/image"

function Companies() {
  return (
    <main className="lg:py-10 grid lg:grid-cols-6 grid-cols-2 py-5 gap-5 lg:w-10/12 mx-auto justify-items-center">
        <Image width={50} height={50} src="https://img.icons8.com/color/60/medium-logo.png" alt="medium-logo"/>
        <Image width={50} height={50} src="https://img.icons8.com/color/60/behance.png" alt="behance-logo"/>
        <Image width={50} height={50} src="https://img.icons8.com/color/60/slack-new.png" alt="slack-logo"/>
        <Image width={50} height={50} src="https://img.icons8.com/fluency/60/dribbble.png" alt="dribble-logo"/>
        <Image width={50} height={50} src="https://img.icons8.com/color/60/tencent-weibo.png" alt="weibo-logo"/>
        <Image width={50} height={50} src="https://img.icons8.com/color/60/foursquare--v2.png" alt="foursquare--v2"/>
    </main>
  )
}

export default Companies