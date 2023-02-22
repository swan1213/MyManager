import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
// ** Reactstrap Imports
import { Card, CardHeader, CardBody, ButtonGroup, Button } from 'reactstrap';

import { useState } from 'react';

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

import img1 from '@src/assets/images/form/form1.png'
import img2 from '@src/assets/images/form/form2.png'


const InvitationPreview = (props) => {

    const { eventInfo } = props.eventInfo;
    const { eventId } = useParams();

    SwiperCore.use([Navigation]);

    const [invitationTypeIndex, setInvitationTypeIndex] = useState(0);
    const slides = [
        img1,
        img2,
    ]

    useEffect(() => {
        if (invitationTypeIndex == 0) document.querySelector('.invitation-type').style.backgroundColor = "yellow";
        if (invitationTypeIndex == 0) document.querySelector('.invitation-type').style.color = "red";
        if (invitationTypeIndex == 1) document.querySelector('.invitation-type').style.backgroundColor = "blue";
        if (invitationTypeIndex == 1) document.querySelector('.invitation-type').style.color = "white";
    }, [invitationTypeIndex])
    // ** Slider params
    const params = {
        className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
        slidesPerView: 1,
        spaceBetween: 55,
        navigation: true,
        breakpoints: {
            1600: {
                slidesPerView: 1,
                spaceBetween: 55
            }
        }
    }

    return (
        <Card>
            <CardHeader>Invitation Type</CardHeader>
            <div className="d-flex flex-column">
                <div className="invitation-type"
                    style={{ width: "80%", maxWidth: "500px", backgroundColor: "white", margin: "6px", fontSize: "11px", border: "2px dashed", marginLeft: "auto", marginRight: "auto" }}>
                    <div style={{ padding: "10px", borderBottom: "1px solid #bea1a1" }}>
                        <span>##-Please accept invitation by visiting that url below this line-##</span>
                    </div>
                    <div style={{ padding: "10px", fontSize: "12px" }}>
                        <p>
                            Hello
                            <br />
                            <br />
                            <u> "admin@mymanager.com"</u> has invited you to their {eventInfo.title}, in a workspace called
                            Mymanager.
                            <br />
                            <br />
                            <span>Just Click: </span> https://mymanager.com/event-preview/{eventInfo._id}
                        </p>
                    </div>
                    <div style={{ padding: "10px", borderTop: "1px solid #bea1a1" }}>
                        <div style={{ lineHeight: "1.7" }}>This email is a service from Https://mymanager.com</div>
                        <div>Delivered by Mymember</div>
                    </div>
                </div>
            </div>

            <CardBody>
                <div className="mb-1">
                    <Swiper
                        {...params}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={(slide) => { setInvitationTypeIndex(slide.activeIndex) }}>
                        {slides.map((img, index) => {
                            return (
                                <SwiperSlide key={"invitation-" + index}>
                                    <a href="/" onClick={(e) => e.preventDefault()}>
                                        <div className="img-container w-50 mx-auto py-75">
                                            <img
                                                src={img}
                                                alt="swiper 1"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

            </CardBody>
        </Card>
    );
};

export default InvitationPreview;
