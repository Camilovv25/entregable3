import React, { useState } from 'react'

const Pagination = ({ totalCards, cardsPerPage, paginate, currentPage, setCurrentPage }) => {
    const pagesNumbers = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pagesNumbers.push(i)
    }
    const [firstLinkIndex, setFirstLinkIndex] = useState(0)
    const [lastLinkIndex, setLastLinkIndex] = useState(4)

    const markNumberPage = (pageNumber) => {
        if (currentPage == pageNumber) {
            return 'page_selected'

        }
    }

    let pageLinks = pagesNumbers.map(pageNumber => <li className={`page_number ${markNumberPage(pageNumber)}`} key={pageNumber} onClick={() => paginate(pageNumber)}><a href="!#">{pageNumber}</a></li>)
    return (
        <nav className='pages-nav'>
            <ul className='pages-nav_list'>
                {
                    (firstLinkIndex >= 1) && <li onClick={() => {

                        setFirstLinkIndex(firstLinkIndex - 3)
                        setLastLinkIndex(lastLinkIndex - 3)
                    }}><i className='bx bx-chevrons-left'></i></li>
                }
                {pageLinks.slice(firstLinkIndex, lastLinkIndex)}
                {
                    (lastLinkIndex <= pagesNumbers.length) && <li onClick={() => {

                        setFirstLinkIndex(firstLinkIndex + 3)
                        setLastLinkIndex(lastLinkIndex + 3)
                    }}><i className='bx bx-chevrons-right' ></i></li>
                }
            </ul>
        </nav>
    )
}

export default Pagination