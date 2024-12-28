import { title } from "process"
import { useState } from "react"

export default function About() {
    const [page, setPage] = useState<"me" | 'what' | 'tools' | 'beyound'>('me')

    const content = {
        me: {
            title: 'Who I am',
            body: <p>I’m a UX/UI Designer currently working at <span className="text-secondary">Mercedes-Benz</span> UI Concepts in Sindelfingen, Germany. With a master’s degree in Social Informatics (specialization: <span className="text-primary">Design and Product Development</span>) and a double degree in <span className="text-primary">International Management</span>, I bring a blend of design expertise and a global perspective to my work.</p>
        },
        what: {
            title: 'What I do',
            body: <p>I design <span className="text-primary">intuitive, user-centered solutions</span> from research to prototypes and usability testing. I combine creativity, strategic thinking, and international experience to craft engaging designs that meet diverse user needs.
                Fluent in <span className="text-primary">Polish, German</span> and <span className="text-primary">English</span>, I connect easily with users and stakeholders.</p>
        },
        tools: {
            title: 'Skills & Tools',
            body:
                <div>
                    <div className="mb-8">
                        <h4 className="font-bold">Skills</h4>
                        <p>Product Design, UX Research, Wireframing, Usability Testing, Visual Design, Project Management, 3D Projects</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Tools</h4>
                        <p>Figma, Adobe Photoshop, Illustrator, Blender, Unity 3D</p>
                    </div>
                </div>

        },
        beyound: {
            title: 'Beyound Design',
            body: <ul>
                <li>🎸 Playing the Guitar</li>
                <li>🎤 Singing</li>
                <li> ✈️ Traveling</li>
                <li>⛷️ Skiing</li>
                <li>☕ And yes, I believe savoring a great cup of coffee should absolutely count as a hobby.</li>
            </ul>
        }
    }

    return (
        <div>
            <div className="flex flex-1 flex-wrap justify-between mb-10 *:text-md *:whitespace-nowrap gap-7">
                <button onClick={() => setPage('me')} className={page === 'me' ? 'activeAboutBtn' : 'aboutBtn'}>who i am</button>
                <button onClick={() => setPage('what')} className={page === 'what' ? 'activeAboutBtn' : 'aboutBtn'}>what i do</button>
                <button onClick={() => setPage('tools')} className={page === 'tools' ? 'activeAboutBtn' : 'aboutBtn'}>skills and tools</button>
                <button onClick={() => setPage('beyound')} className={page === 'beyound' ? 'activeAboutBtn' : 'aboutBtn'}>beyound design</button>
            </div>

            <div>
                <h3 className="h3">{content[page].title}</h3>
                {content[page].body}
            </div>
        </div>
    )
}