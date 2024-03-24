import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './assets/mock.js';

const rootElem = document.getElementById('root');
const root = ReactDOM.createRoot(rootElem);


// root.render(
//     <main>
//         <section>
//             <h2>{restaurants[0].name}</h2>
//             <h3>Меню</h3>
//             <ul>
//                 <li>{restaurants[0].menu[0].name}</li>
//                 <li>{restaurants[0].menu[1].name}</li>
//                 <li>{restaurants[0].menu[2].name}</li>
//             </ul>
//             <h3>Отзывы</h3>
//             <ul>
//                 <li>{restaurants[0].reviews[0].text}</li>
//                 <li>{restaurants[0].reviews[1].text}</li>
//             </ul>            
//         </section>

//         <section>
//             <h2>{restaurants[1].name}</h2>
//             <h3>Меню</h3>
//             <ul>
//                 <li>{restaurants[1].menu[0].name}</li>
//                 <li>{restaurants[1].menu[1].name}</li>
//             </ul>
//             <h3>Отзывы</h3>
//             <ul>
//                 <li>{restaurants[1].reviews[0].text}</li>
//                 <li>{restaurants[1].reviews[1].text}</li>
//                 <li>{restaurants[1].reviews[2].text}</li>
//             </ul>            
//         </section>

//         <section>
//             <h2>{restaurants[2].name}</h2>
//             <h3>Меню</h3>
//             <ul>
//                 <li>{restaurants[2].menu[0].name}</li>
//                 <li>{restaurants[2].menu[1].name}</li>
//                 <li>{restaurants[2].menu[2].name}</li>
//             </ul>
//             <h3>Отзывы</h3>
//             <ul>
//                 <li>{restaurants[2].reviews[0].text}</li>
//             </ul>            
//         </section>
        
//         <section>
//             <h2>{restaurants[3].name}</h2>
//             <h3>Меню</h3>
//             <ul>
//                 <li>{restaurants[3].menu[0].name}</li>
//                 <li>{restaurants[3].menu[1].name}</li>
//             </ul>
//             <h3>Отзывы</h3>
//             <ul>
//                 <li>{restaurants[3].reviews[0].text}</li>
//                 <li>{restaurants[3].reviews[1].text}</li>
//             </ul>            
//         </section>
//     </main>
// );


root.render(
    React.createElement('main', {
        children: [
            React.createElement('section', {
                key: restaurants[0].id,
                children: [
                    React.createElement('h2', { key: restaurants[0].name, children: restaurants[0].name }),
                    React.createElement('h3', { key: 'menu0', children: 'Меню'}),
                    React.createElement('ul', {
                        key: 'menuList0',
                        children: [
                            React.createElement('li', { key: restaurants[0].menu[0].id, children: restaurants[0].menu[0].name }),
                            React.createElement('li', { key: restaurants[0].menu[1].id, children: restaurants[0].menu[1].name }),
                            React.createElement('li', { key: restaurants[0].menu[2].id, children: restaurants[0].menu[2].name })
                        ]
                    }),
                    React.createElement('h3', { key: 'reviews0', children: 'Отзывы' }),
                    React.createElement('ul', {
                        key: 'reviewsList0',
                        children: [
                            React.createElement('li', { key: restaurants[0].reviews[0].id, children: restaurants[0].reviews[0].text }),
                            React.createElement('li', { key: restaurants[0].reviews[1].id, children: restaurants[0].reviews[1].text })
                        ]
                    })
                ]
            }),
            React.createElement('section', {
                key: restaurants[1].id,
                children: [
                    React.createElement('h2', { key: restaurants[1].name, children: restaurants[1].name }),
                    React.createElement('h3', { key: 'menu1', children: 'Меню' }),
                    React.createElement('ul', {
                        key: 'menuList1',
                        children: [
                            React.createElement('li', { key: restaurants[1].menu[0].id, children: restaurants[1].menu[0].name }),
                            React.createElement('li', { key: restaurants[1].menu[1].id, children: restaurants[1].menu[1].name })
                        ]
                    }),
                    React.createElement('h3', { key: 'reviews1', children: 'Отзывы' }),
                    React.createElement('ul', {
                        key: 'reviewsList1',
                        children: [
                            React.createElement('li', { key: restaurants[1].reviews[0].id, children: restaurants[1].reviews[0].text }),
                            React.createElement('li', { key: restaurants[1].reviews[1].id, children: restaurants[1].reviews[1].text }),
                            React.createElement('li', { key: restaurants[1].reviews[2].id, children: restaurants[1].reviews[2].text })
                        ]
                    })
                ]
            }),
            React.createElement('section', {
                key: restaurants[2].id,
                children: [
                    React.createElement('h2', { key: restaurants[2].name, children: restaurants[2].name }),
                    React.createElement('h3', { key: 'menu2', children: 'Меню' }),
                    React.createElement('ul', {
                        key: 'menuList2',
                        children: [
                            React.createElement('li', { key: restaurants[2].menu[0].id, children: restaurants[2].menu[0].name }),
                            React.createElement('li', { key: restaurants[2].menu[1].id, children: restaurants[2].menu[1].name }),
                            React.createElement('li', { key: restaurants[2].menu[2].id, children: restaurants[2].menu[2].name })
                        ]
                    }),
                    React.createElement('h3', { key: 'reviews2', children: 'Отзывы' }),
                    React.createElement('ul', {
                        key: 'reviewsList2',
                        children: [
                            React.createElement('li', { key: restaurants[2].reviews[0].id, children: restaurants[2].reviews[0].text })
                        ]
                    })
                ]
            }),
            React.createElement('section', {
                key: restaurants[3].id,
                children: [
                    React.createElement('h2', { key: restaurants[3].name, children: restaurants[3].name }),
                    React.createElement('h3', { key: 'menu3', children: 'Меню' }),
                    React.createElement('ul', {
                        key: 'menuList3',
                        children: [
                            React.createElement('li', { key: restaurants[3].menu[0].id, children: restaurants[3].menu[0].name }),
                            React.createElement('li', { key: restaurants[3].menu[1].id, children: restaurants[3].menu[1].name })
                        ]
                    }),
                    React.createElement('h3', { key: 'reviews3', children: 'Отзывы' }),
                    React.createElement('ul', {
                        key: 'reviewsList3',
                        children: [
                            React.createElement('li', { key: restaurants[3].reviews[0].id, children: restaurants[3].reviews[0].text }),
                            React.createElement('li', { key: restaurants[3].reviews[1].id, children: restaurants[3].reviews[1].text })
                        ]
                    })
                ]
            })
        ]
    })
)