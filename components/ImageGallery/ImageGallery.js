import React from "react"
import { useKeenSlider } from "keen-slider/react"

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(next)
            })
        })
    }
}

const ImageGallery = ({gallery}) =>  {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 8,
                spacing: 10,
            },
            breakpoints: {
                "(min-width: 375px)": {
                    slides: {
                        perView: 3,
                        spacing: 10,
                    },
                },
                "(min-width: 600px)": {
                    slides: {
                        perView: 4,
                        spacing: 10,
                    },
                },
                "(min-width: 768px)": {
                    slides: {
                        perView: 6,
                        spacing: 10,
                    },
                },
                "(min-width: 1024px)": {
                    slides: {
                        perView: 8,
                        spacing: 10,
                    },
                },
            },
        },
        [ThumbnailPlugin(instanceRef)]
    );

    console.log(gallery);

    return (
        <>
            <div ref={sliderRef} className="keen-slider ">
                {
                    gallery.map((image, idx) => {
                        return (

                            <div key={image.id} className={`keen-slider__slide number-slide${idx}`}>
                                <img src={`https://cp.stanfordschool.uz/storage/${image.image}`} alt={'image'} />
                            </div>
                        )
                    })
                }
            </div>
            <div ref={thumbnailRef} className="keen-slider thumbnail">
                {
                    gallery.map((image, idx) => {
                        return (
                            <div key={image.id} className={`keen-slider__slide number-slide${idx}`}>
                                <img src={`https://cp.stanfordschool.uz/storage/${image.image}`} alt={'image'} />
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>{`

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  min-height: 70vh;
  max-height: 100vh;
}


img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.thumbnail .keen-slider__slide {
  font-size: 30px;
  margin-top: 10px;
  height: 100px;
  object-fit: cover;
  object-position: center;
}

.thumbnail .keen-slider__slide {
  cursor: pointer;
}
.thumbnail .keen-slider__slide.active {
  border: 2px dashed black;
}

            `}</style>
        </>
    )
}

export default ImageGallery;
