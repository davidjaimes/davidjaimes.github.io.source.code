// React Dependencies
import React from 'react'

// Bootstrap Dependencies
import {Card, Media, Badge, Image} from 'react-bootstrap'
import {FaBook} from 'react-icons/fa'

// Images
import Kepler16 from "../images/kepler-16b.png"
import KOI3570 from "../images/koi-3570-pflc.png"


export default function CardIndex() {
	return (
		<div>
			<Card className="mt-5 mb-5 border border-dark">
				<Card.Body>
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/kepler-16" className="text-dark stretched-link"><FaBook size={25}/> Kepler-16b: The First Circumbinary Planet</a></Card.Title>
							<Badge pill variant="dark">Python</Badge>{' '}
							<Badge pill variant="dark">AstroPy</Badge>{' '}
						</Media.Body>
						<Image src={Kepler16} rounded className="mb-3 border border-secondary" width={120} height={90}/>
					</Media>
					<Card.Text>
						<b>Kepler-16b</b> (formally <b>Kepler-16 (AB)-b</b>) is an extrasolar planet. It is a Saturn-mass planet consisting of half gas and half rock and ice, and it orbits a binary star, Kepler-16, with a period of 229 days. "It is the first confirmed, unambiguous example of a circumbinary planet – a planet orbiting not one, but two stars," said Josh Carter of the Harvard-Smithsonian Center for Astrophysics, one of the discovery team.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card className="mt-5 mb-5 border border-dark">
				<Card.Body>
					<Media>
						<Media.Body className="mb-3">
							<Card.Title><a href="/eclipsing-binaries" className="text-dark stretched-link"><FaBook size={25}/> KOI-2570: An Eclipsing Binary Star System</a></Card.Title>
							<Badge pill variant="dark">Python</Badge>{' '}
							<Badge pill variant="dark">AstroPy</Badge>{' '}
						</Media.Body>
						<Image src={KOI3570} rounded className="mb-3 border border-secondary" width={120} height={90}/>
					</Media>
					<Card.Text>
						<b>KOI-3570</b> (aliases: <b>2MASS J19405783+4009273</b>, <b>KIC 5023948</b>, and <b>WISE J194057.82+400927.3</b>) is an eclipsing binary star system. The term KOI means exactly what the name implies – Kepler has declared these to be "objects of interest," not planetary candidates. KOI-3570 is a member of the old open cluster NGC 6819. <b>NGC 6819</b> is an open cluster (commonly known as an "open star cluster") located 7,200 light years away in the Cygnus constellation. It was discovered by Caroline Herschel on 12 May 1784.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}