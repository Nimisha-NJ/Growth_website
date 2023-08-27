import React, { useEffect, useState } from "react";
import "./chat.css";

function Chat() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const userdata = [
        {
          id: 1,
          company:
            "https://s3-alpha-sig.figma.com/img/3d17/c44c/0371755ac9aa740e1ba60935bdb96c8e?Expires=1693785600&Signature=D6Bxmln06-8gAWZN0t4acWb4qiunmNQvvc6zGazId3YAkosGb4bK2xwx~e5FusrHuFssm2~Ac0I73XgBFk6Nbzj14dWrEaIEuq79VZa20wm9n6v5Yuki532NcO~Vbqj4qjYi6-R91xOo7RR60PF4z0cByP6wHosGaKwBtn6BExrmjn8ks4CcjMx6ih5BDaYn8CO-~aw0mUHjkJep3InMCRttLbTZ432FYT2KU8sOZthrb1NQO1h3FWl2RBX84YmT6OmJsWvXIyC6EVWPfVSyRrjFPj7dYiaSXu9KdbHvwPm8IzotxGcuOR9nwgva-hjxnlTNwnF-xe-lEKsHGnfn6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          img: "https://s3-alpha-sig.figma.com/img/e9de/98c9/b03fa94e3f3849f41792c9ecf92d96d1?Expires=1693785600&Signature=YbFRw-AzviuKRxzDwSoXxwWfTH7MSMTT~oF~x1kIpbcAAbS0InkIErT8fZvhi3~EafDGL9AdudAMhq0IRZidZWVkTIpeRLfn--0qwkN~9FsuPUfkTC5EXpx7v1ehnbYDTURfenEFsHOyyod-i7ApmtO3s3LXkS4JBCZ3uNaKsOWByH1HD3bMhdAtujTLoby4elM7qBpeDcQ0~oH3wSlMY8NS1IhLk8C8XZ9nzN9hw9L9jPYPFKlCuJTZ9HAt8wNRdpSYzX0zGLsUaynaXnsj0MzzP43GgRCwJDkWxBa1IY~BWGloWZSU1IEZ18pkcxL4bNqcEvOhSHOnGl1QaGyLXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          name: "Harish Kumar",
          designation: "CEO & Founder CrawlQ.ai",
          para: "Team growth.cx did a great job in helping us revamp our website to make it stand on par with global SaaS brands which turned our Appsumo campaign into a huge success.",
          Service: ["GTM Consulting", "Growth Marketing", "Design"],
        },
        {
          id: 2,
          company:
            "https://s3-alpha-sig.figma.com/img/cf07/60b7/4a6ed52cc567013afad6a7647e19f199?Expires=1693785600&Signature=K2u0jf8727hLjG~qjbyH1ZW9LRLxWuHwni0lsQ1GuE706YoV~nKqMMLOSAfaPeduylXu1pPnTDEVQZ9NZSTv~6z4mGwb9zK0LWMNVw~PFftXHL9DGAbHHXGsM2E0miJB9OhdF-pLwYGQfDLMLQ-juXe6TWRW4RwKWpjH2yZUkNBgn8I~amyHQCCg0rkSGNI-KmY6~khA2XerRkZGpJvV~9RhzNV1VeOlMNDvyANIsRm~C47cyAk9-Uveah-bYqdXsTIXzS33I~90TX3Rjkd8RYOktdA1JXEXUpIYeG4-TjUr4z25BKPLdNqCBKKkA-h7l8LFiH1GDdgUuu1siRrtcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          img: "https://s3-alpha-sig.figma.com/img/f241/4e13/1629f2e8c48ab8d5bd92236a64e7625c?Expires=1693785600&Signature=bC9BUdRGPAPCOfulSka9gkLtsJkqSLFgPr1n8EOfEgF-1rEloXnGrfIh28oVCHCTbxWK2-jWF5AvLW517RGqHMqYu72oVtH1bJr4hXM7M-bM6xkhQN8EaYqBxYi~7i2GZMtAu2HbaOCbFRX5Y-ekJkltEzIuq1HM1sq~J2qWAlA4jRC7scBX7Bw-2DyEQhNt0tQMCBh1gAFBB7ABGb2LQyJDpJKEJojCHEe7oYMeqjmIMUZGabxHI2KyFej3-UAUsrrAZrdoChzGc0GdKtwn8pt9StsrXXrEoldpdN0dtiFtalOywIi3yBw~VNZ-0JGQbLK63EgZJa0A7knLyuZXaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          name: "Chayan Mukherjee",
          designation: " CEO & Founder, Qandle",
          para: "As a growth marketing partner, the impact growth.cx creates is tremendous. They just came in and took it to another level in just 3 months.",
          Service: ["GTM Consulting", "Growth Marketing", "Design"],
        },
        {
          id: 3,
          company:
            "https://s3-alpha-sig.figma.com/img/a19c/8dab/74c175c6ba28748ed2cb967a60350392?Expires=1693785600&Signature=bbmJxJXdC0iZkcVujZxqhtB8kPaEwtHNpVU7xU9Q~KbbHuO7l-2Y84XeGPZEBqE39UUaY4seNv-y~rbf1DOAVRPoIl5pGoKt6B~7nbsNDMFNhDAV63MNOA2BTuC9UrPb0UJByAFldHNJnRsh1QHYKO00oVwe-TCn76s1DBoBmv6R5qupAfi7X3Ymw9IcZTqGZrZNx8ky3s5wgOJDyVGKLUZWQjB9Bz7wJiOzITQqhKjqVZ~GGWM6hKXA3WTjSK-7P7vNIp8SCilPc6iZLi04569QZBdsCXjxWm-Btp4Btpwfdg4Ba~DwHFNNuI62XwpccWmN8GnBsMNb8DNOx9wX5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          img: "https://s3-alpha-sig.figma.com/img/ba85/8393/cf9e867cf5ee7d5428a00a327bc3e8fa?Expires=1693785600&Signature=HZU5DxuMlgw573mE9UQgo7LSaZeBu7EcQaFmhFUijXr2yi741OjqAgcSCUcjxfXGIQ9vJXFkfPs3h-b1lZI42mdeEm1jZAhUAq1AjXbQYsY0xzfGAlPlDnLHZ7qTswf1LK~rsoqn1IZ7SHsa70nPhYt2L~7kCoYJ-JpiIIr6hy4-Pe1ma9pdI8P6Lu0H6KHLg1UVt7D776wpXO17qdPwnsE7vEMdnJYPads98DrknUx4px2X-8S7Bw1VW8uUAJk45OdZ7zd~kVnYirJ9jYkziWA2y4mnyfBw7j3YkoE8L~Uod~EyaGPWGJkBMYtdVfwSCmeLEBUnXssIbxBCTL8U0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          name: "Gaurav Bhawnani",
          designation: "Founder, SuperBeings",
          para: "We were looking for a creative team who could help us create a new look for our website and rewrite content to align with the new product positioning and growth.cx fit the bill perfectly.",
          Service: ["GTM Consulting", "Growth Marketing", "Design"],
        },
        {
          id: 4,
          company:
            "https://s3-alpha-sig.figma.com/img/abb8/59d9/634116a3caf35bc79d476e9c3d17be24?Expires=1693785600&Signature=JhUZuQw9y3-nWS09bHKD6E6GQF2IaMC3lO0n8sTQvfK4F780mGDNVz-QMEovSGjR-vULvNNpjXpEAZir1JmnKNg8Jw~lO~pEMPFexwDNCOXsGy8lA~AgCYA70BdtGEzoxz4TG56nNxKpuV8kt3mWjh7vj5hGSi-ySpSV4Q5UmhZ1UZuFEFHUKZdjUJv~P0wxLrt8LzwDnTgwbFQ2aqj7YvwyDcIzH8DLwk4wLEbTA14FP9G~zsl2D4Zy~NFa8U6b5am2Z7gWlGCNrK5Y2EFlhZ3~pK5rAFWipObnoeB6TIvQqafr~EbV~ts5vgmD~IBYQ3MUqThct10JYaZSBtHq~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          img: "https://s3-alpha-sig.figma.com/img/ad12/60c7/bdb06d577a336b9f2f9b71fad56ec577?Expires=1693785600&Signature=JBKNj~za9Svg1Zim3LUtiaqUqEqj4wXz25Rf0bqAnHMv2RCQMvThiJ5GeQu76bdmZNncfbtR-nmqhEMIWkQfpu7SbPpRJhCu9JA~OjnApVONoASrA1QH-E1bDRqaXskevgVv43dc0~SdQjgEbjgbbGfVuVcESyP-zeVx6I92c-~RzpfnpJJfguC3WGCg8MAcD5d0p0rx49Sk2~JkVaRERNRcqvCDps57iITkHpd1pA2em7s9G5dq01hKovoeIXu2VB3bOlcVXlPxiNJEpWJIwlwWs6~xxjWI2QkdSNqPmWA7J8oOSFH13h7kw~SnzAC2eKsLthegL6xUeV8GLRFvRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          name: "Rakesh Boddu",
          designation: "Product Marketing Manager, Appveen",
          para: "They are a very dedicated team and one can very easily rely on them to deliver successful outcomes.",
          Service: [
            "Brand Repositioning",
            "Content Creation",
            "SEO",
            "Web UI/UX",
          ],
        },
      ];
      setData(userdata);
    };

    fetchData();
  }, []);

  return (
    <div className="chat">
      {data.map((value) => (
        <div className="overlap-group" key={value.id}>
          <img className="harish" alt="Harish" src={value.img} />
          <img
            className="union"
            alt="Union"
            src="https://generation-sessions.s3.amazonaws.com/62ae206d43b8e938b033bf2e2e02c631/img/union.svg"
          />
          <div className="frame">
            <div className="div">
              <img className="image" alt="Imagee" src={value.company} />
              <p className="harish-kumar-CEO">
                <span className="text-wrapper">
                  {value.name}
                  <br />
                </span>
                <span className="span">{value.designation}</span>
              </p>
            </div>
            <p className="p">{value.para}</p>
          </div>
          <div className="frame-2">
            <br />
            <div className="text-wrapper-2">Services provided:</div>
            <div className="frame-3" key={value.id}>
              <div className="div-wrapper">
                <div className="text-wrapper-3">{value.Service}</div>
              </div>
            </div>
          </div>
          <img
            className="vector"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/62ae206d43b8e938b033bf2e2e02c631/img/vector.svg"
          />
        </div>
      ))}
    </div>
  );
}

export default Chat;
