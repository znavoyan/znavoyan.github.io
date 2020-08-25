import React from "react";
import aboutFrame from '../../images/aboutFrame.svg';
import topicVector_1 from '../../images/topicVector_1.svg';
import topicVector_2 from '../../images/topicVector_2.svg';
import topicVector_3 from '../../images/topicVector_3.svg';
import topicVector_4 from '../../images/topicVector_4.svg';
import topicVector_5 from '../../images/topicVector_5.svg';
import festPicAbout from '../../images/festPicAbout.svg';

const About = () => {
    return <div className="container">
        <div className="about">
            <div className="space-100-height"></div>
            <div className="space-85-height"></div>
            <div className="flex flex-space-between column">
                <div></div>
                <div className="flex flex-space-between full-width first-section">
                    <div className="flex align-start column">
                        <div className="space-35-height"></div>
                        <div className="big-text">
                            <div>What is</div>
                            <div><span>DataFest</span></div>
                            <div><span>Yerevan</span></div>
                        </div>
                    </div>

                    <img src={aboutFrame} className="main" alt="" />
                </div>
            </div>
            <div className="space-100-height"></div>
            <div className="space-20-height"></div>
            <div>
                <h2 className="title">
                    What is <span>DataFest Yerevan</span>
                </h2>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget commodo leo. Etiam volutpat tincidunt eros, sit amet iaculis enim sagittis eu. Proin sed dapibus orci. Sed at pulvinar nulla, at vestibulum libero. Cras lectus ipsum, imperdiet in massa egestas, feugiat imperdiet mi. Suspendisse maximus neque non ex auctor, at pharetra nunc rhoncus. Nam vel faucibus justo.
            </p>
                <p className="paragraph">
                    Integer porttitor egestas tortor eu accumsan. Vestibulum ornare lobortis tristique. Quisque nisl velit, tempus placerat maximus ac, elementum vitae nibh. Quisque in nisl ipsum. Mauris ullamcorper ante quis nibh posuere efficitur in id magna. Aenean non arcu libero. Phasellus iaculis tincidunt dolor. Quisque interdum et arcu sit amet mollis. Nunc vulputate accumsan risus, eu placerat ex pretium at. Aliquam convallis, sem et maximus dapibus, nulla sapien blandit erat, eget consectetur leo diam sed urna. Aliquam vestibulum vehicula velit, mattis volutpat ligula finibus ut. Cras congue tincidunt euismod.
            </p>

                <div className="space-40-height"></div>
                <div className="space-40-height"></div>

                <h2 className="title">
                    Topics of this Year
                    </h2>
                <div className="space-40-height"></div>
                <div className="flex topic-icons">
                    <div className="flex column">
                        <img src={topicVector_1} className="icon-1" alt="" />
                        <p className="paragraph">
                            <span>Lorem</span> Ipsum
                        </p>
                    </div>

                    <div className="flex column">
                        <img src={topicVector_2} className="icon-2" alt="" />
                        <p className="paragraph">
                            <span>Lorem</span> Ipsum
                        </p>
                    </div>

                    <div className="flex column">
                        <img src={topicVector_3} className="icon-3" alt="" />
                        <p className="paragraph">
                            <span>Lorem</span> Ipsum
                        </p>
                    </div>

                    <div className="flex column">
                        <img src={topicVector_4} className="icon-4" alt="" />
                        <p className="paragraph">
                            <span>Lorem</span> Ipsum
                        </p>
                    </div>

                    <div className="flex column">
                        <img src={topicVector_5} className="icon-5" alt="" />
                        <p className="paragraph">
                            <span>Lorem</span> Ipsum
                        </p>
                    </div>
                </div>
                <div className="space-20-height"></div>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget commodo leo. Etiam volutpat tincidunt eros, sit amet iaculis enim sagittis eu. Proin sed dapibus orci. Sed at pulvinar nulla, at vestibulum libero. Cras lectus ipsum, imperdiet in massa egestas, feugiat imperdiet mi. Suspendisse maximus neque non ex auctor, at pharetra nunc rhoncus. Nam vel faucibus justo.
            </p>
            </div>
            <div className="space-100-height"></div>
            <div className="space-35-height"></div>
            <img src={festPicAbout} className="festivalPic" alt="" />
            <div className="space-100-height"></div>
            <div className="space-40-height"></div>
            <div className="space-20-height"></div>
        </div>
    </div>
};


export default About;