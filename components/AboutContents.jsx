import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    
    return (
        <div>
            <p className='font-semibold leading-10 p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo, consequuntur consectetur itaque eos reprehenderit laborum dolor alias officiis perferendis voluptatibus velit temporibus. Molestias fugit animi quos ipsum amet quis! Quo blanditiis sit nihil facilis eveniet unde sunt sed tempora. Earum, qui, tempora commodi doloremque laboriosam odio perspiciatis, enim iusto natus recusandae ullam ea in aut. Placeat quibusdam minus maxime natus sint quaerat, impedit nam, cum obcaecati molestiae delectus totam quo labore ipsum eius alias aut odit quasi esse blanditiis, adipisci iusto earum. Ducimus ut distinctio facilis officiis iure quae maxime impedit fuga incidunt minus! Esse sit nihil laudantium quae!</p>

            <ul>
                <Link href={'/about/hestory'}>About hestory</Link> <br />
                <Link href={'/about'}>About Vision</Link>
            </ul>
        </div>
    );
};

export default AboutContents;