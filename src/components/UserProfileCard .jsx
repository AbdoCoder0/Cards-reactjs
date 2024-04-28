import React from 'react';
import '../style/UserProfileCard.css';
import { motion } from 'framer-motion';


export default function UserProfileCard({ user, showDetails }) {
    return (
        <div className='all'>
            <div className='fullCard'>
                <div className='left-card'>
                    <motion.img src={user.imageUrl} whileHover={{ scale: 0.9 }} alt="Profile" />
                </div>
                <div className='right-card'>
                    <h3>{user.name}</h3>
                    <p>{user.description}</p>
                    {showDetails && (
                        <div className='infos-sup'>
                            <div className='inline-infos'>
                                <p>{user.age}</p>
                                <p>{user.location}</p>
                            </div>
                            <div className='block-infos'>
                                <p>{user.interests}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
