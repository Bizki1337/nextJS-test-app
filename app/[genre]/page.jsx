import Image from 'next/image'

const Genre = async ({
	params
}) => {
	const { genre } = params

	const data = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`
	)

	const res = await data.json()

    return (
        <div> 
			<span>
				Current genre: 
				<span>{genre}</span>
			</span>
			<div>
				{
					res && res.items.map((item) => {
						return (
							<div>
								<p>{item.volumeInfo.title}</p>
								{/* <Image
									width={200}
									height={100}
									src={item.volumeInfo.imageLinks.thumbnail}
								/> */}
							</div>
						)
					})
				}
			</div>
		</div>
    )
}

export default Genre