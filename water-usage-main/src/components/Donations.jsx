import React from 'react'
import greenpeaceImg from '../assets/image 1.png'
import rainforestImg from '../assets/image 2.png'
import coolearthImg from '../assets/image 3.png'
import practicalactionImg from '../assets/image 5.png'
import catfeImg from '../assets/image 6.png'
import oneeightyImg from '../assets/image 7.png'

export default function Donations() {
    return (
        <div className='container mx-auto my-5 rounded text-light'>
            <div className='row '>

                <div className='col-6 py-4 rounded-start' style={{ backgroundColor: '#5D7E98' }}>
                    <h3 className='pb-5' >We want to be real with you</h3>
                    <p className='py-5 mx-4 px-4'>These are vetted, global environmental charities that accept no corporate or government donations so they can maintain a much needed independent voice, but it means they rely on individual supporters like you to fund work. By making a much needed donation you are helping investigate, campaign, document and lobby for a sustainable balance between humans and the environment.</p>
                    <p className='pt-5'>Your support means the world.</p>
                </div>

                <div className='col-6 py-4 rounded-end' style={{ backgroundColor: '#7C9670' }}>
                    <h3>Support a charity today!</h3>
                    <div className='container'>

                        <div className='row'>

                            <div className='col'>
                                <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://engage.us.greenpeace.org/onlineactions/d35iGaKgPE2qobi77zLctg2?utm_source=website&utm_medium=hero&utm_campaign=eoyfundhero&sourceid=1014972'>
                                    <div className='card cardDesign'>
                                        <div>
                                            {/* <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://engage.us.greenpeace.org/onlineactions/d35iGaKgPE2qobi77zLctg2?utm_source=website&utm_medium=hero&utm_campaign=eoyfundhero&sourceid=1014972'> */}
                                            <img className='donation-image' src={greenpeaceImg} alt='GreenPeace Logo' />
                                            {/* </a> */}
                                        </div>
                                    </div>
                                    <p>GreenPeace</p>
                                </a>
                            </div>

                            <div className='col'>
                                <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://www.rainforest-alliance.org/'>
                                    <div className='card cardDesign'>
                                        <div>
                                            {/* <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://engage.us.greenpeace.org/onlineactions/d35iGaKgPE2qobi77zLctg2?utm_source=website&utm_medium=hero&utm_campaign=eoyfundhero&sourceid=1014972'> */}
                                            <img className='donation-image' src={rainforestImg} alt='Rainforest Logo' />
                                            {/* </a> */}
                                        </div>
                                    </div>
                                    <p>Rainforest Alliance</p>
                                </a>
                            </div>

                        </div>


                        <div className='row'>
                            <div className='col'>
                                <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://www.coolearth.org/donate/'>
                                    <div className='card cardDesign'>
                                        <div>
                                            {/* <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://engage.us.greenpeace.org/onlineactions/d35iGaKgPE2qobi77zLctg2?utm_source=website&utm_medium=hero&utm_campaign=eoyfundhero&sourceid=1014972'> */}
                                            <img className='donation-image' src={coolearthImg} alt='CoolEarth Logo' />
                                            {/* </a> */}
                                        </div>
                                    </div>
                                    <p>Cool Earth</p>
                                </a>
                            </div>

                            <div className='col'>
                                <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://practicalaction.org/donate/?ref=%2F'>
                                    <div className='card cardDesign'>
                                        <div>
                                            {/* <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://engage.us.greenpeace.org/onlineactions/d35iGaKgPE2qobi77zLctg2?utm_source=website&utm_medium=hero&utm_campaign=eoyfundhero&sourceid=1014972'> */}
                                            <img className='donation-image' src={practicalactionImg} alt='Practical Action' />
                                            {/* </a> */}
                                        </div>
                                    </div>
                                    <p>Practical Action</p>
                                </a>
                            </div>

                        </div>



                        <div className='row'>

                            <div className='col'>
                                <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://donate.catf.us/page/39127/donate/1'>
                                    <div className='card cardDesign'>
                                        <div>
                                            {/* <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://engage.us.greenpeace.org/onlineactions/d35iGaKgPE2qobi77zLctg2?utm_source=website&utm_medium=hero&utm_campaign=eoyfundhero&sourceid=1014972'> */}
                                            <img className='donation-image' src={catfeImg} alt='Clean Air Task Force Logo' />
                                            {/* </a> */}
                                        </div>
                                    </div>
                                    <p>Clean Air Task Force</p>
                                </a>
                            </div>

                            <div className='col'>
                                <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://carbon180.org/donate'>
                                    <div className='card cardDesign'>
                                        <div>
                                            {/* <a className='card-body' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://engage.us.greenpeace.org/onlineactions/d35iGaKgPE2qobi77zLctg2?utm_source=website&utm_medium=hero&utm_campaign=eoyfundhero&sourceid=1014972'> */}
                                            <img className='donation-image' src={oneeightyImg} alt='Carbon 180' />
                                            {/* </a> */}
                                        </div>
                                    </div>
                                    <p>Carbon 180</p>
                                </a>
                            </div>

                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}