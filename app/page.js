import Link from 'next/link'

export default function Home() {

	const genresList = [
		{
			id: 0,
			title: 'fantasy',
		},
		{
			id: 1,
			title: 'fiction',
		},
		{
			id: 2,
			title: 'thriller',
		},
		{
			id: 3,
			title: 'romance',
		},
		{
			id: 4,
			title: 'westerns',
		},
	]

	return (
		<main> 
			<div>
				{
					genresList.map(genre => (
						<div key={`genre-list-${genre.id}`}>
							<Link href={`/${genre.title}`}>{genre.title}</Link>
						</div>
					))
				}
			</div>
		</main>
	)
}
