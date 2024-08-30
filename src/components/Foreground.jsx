import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);

    //useState
    const data = [
        {
            desc: "It is a long established fact that a reader by the readable content.",
            fileSize: ".9mb",
            icon: true,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "It is Second box fact that a reader by the readable content.",
            fileSize: "1.9mb",
            icon: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "Third box content wraper fact that a reader by the readable content.",
            fileSize: "3.9mb",
            icon: true,
            tag: {
                isOpen: true,
                tagTitle: "Upload File",
                tagColor: "blue"
            }
        }
    ];

  return (
    <>
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap py-5">
            {data.map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <Card data={item} refrence={ref} />
            ))}
        </div>
    </>
  )
}

export default Foreground