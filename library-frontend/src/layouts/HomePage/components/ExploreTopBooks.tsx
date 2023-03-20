import { Link } from "react-router-dom";

export const ExploreTopBooks = () => {
    return (
        <div className='p-5 mb-4 best-book-banner'>
            <div className='container-fluid py-5 d-flex text-white justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Find your next best read</h1>
                    <Link type='button' className='btn secondary-color btn-lg text-white' to='/search'>
                        Explore our best books</Link>
                </div>
            </div> 
        </div>
    );
}