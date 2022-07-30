import React from 'react';
import RightSidePanel from '../RightSidePanel/index';
import Series from '../Series/index';
import SidebarInfoPanel from '../SidebarInfoCard';
import './mainContent.css';

function MainContent() {
    return (
        <div className='main__content'>
            <div className='left__panel'>
                <h2>Justo Vulputate Tortor sem</h2>
                <div className='content'>
                    <div className='first_para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dignissim leo. In vitae eleifend ex, faucibus convallis nulla. Phasellus tempus faucibus ex, at tempor tortor feugiat ut. Suspendisse turpis felis, convallis et porttitor ut, faucibus vel risus. Phasellus eu urna et libero gravida varius sed vel justo. Nam interdum ligula augue, et venenatis elit vulputate vitae. Maecenas turpis ipsum, tempor sit amet enim vitae, cursus porta ex. Integer hendrerit.
                    </div>
                    <div className='sub__content'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    <span className='quote'>
                        <div className='quote'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                    --Jane Doe</div>
                    </span>
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                    </div>
                </div>
                <Series/>
            </div>
            <div className='right__panel'>
               <RightSidePanel/>
               <SidebarInfoPanel/>
            </div>
        </div>
    )
}

export default MainContent;
