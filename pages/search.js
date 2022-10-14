import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'

const Search = ({ searchResults }) => {
  console.log(searchResults)
	return (
		<div>
			<Header />
			<main className='flex'>
				<section className='flex-grow pt-14 px-6'>
					<p className='text-xs'>300+ Stays for 5 number of guests</p>
					<h1 className='text-3xl font-semibold mt-2 mb-6'>
						Stays in ALEVCHUK homes:)
					</h1>

					<div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
						<p className='button'>Cancelation Flexability</p>
						<p className='button'>Type of Place</p>
						<p className='button'>Price</p>
						<p className='button'>Rooms and Beds</p>
						<p className='button'>More Filters</p>
					</div>
					<div className='flex flex-col'>
						{searchResults.map(
							({ img, location, title, description, star, price, total }) => (
								<InfoCard
									key={img}
									image={img}
									location={location}
									title={title}
									description={description}
									star={star}
									price={price}
									total={total}
								/>
							)
						)}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default Search

export async function getServerSideProps() {
	const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
		res => res.json()
	)

	return {
		props: {
			searchResults,
		},
	}
}
