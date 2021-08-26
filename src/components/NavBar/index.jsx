import './styles.css'
import navBarText from 'i18n/NavBar.json'

import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<nav className='navbar d-flex justify-content-between navbar-expand-lg navbar-light'>
			<Link className='navbar-brand mx-2' to='#home'>
				Logo
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#navbarNavDropdown'
				aria-controls='navbarNavDropdown'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div
				className='collapse navbar-collapse mx-2 d-lg-flex justify-content-lg-end'
				id='navbarNavDropdown'
			>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link
							className='nav-link active'
							aria-current='page'
							to={navBarText.home.link}
						>
							{navBarText.home.text}
						</Link>
					</li>
					<li className='nav-item dropdown'>
						<Link
							className='nav-link dropdown-toggle'
							to={navBarText.aboutUs.link}
							id='navbarDropdownMenuLink'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							{navBarText.aboutUs.text}
						</Link>
						<ul
							className='dropdown-menu'
							aria-labelledby='navbarDropdownMenuLink'
						>
							{navBarText.aboutUs.services.map((service, i) => (
								<li key={i}>
									<Link
										className='dropdown-item'
										to={service.link}
									>
										{service.text}
									</Link>
								</li>
							))}
						</ul>
					</li>
					<li className='nav-item dropdown'>
						<Link
							className='nav-link dropdown-toggle'
							to={navBarText.service.link}
							id='navbarDropdownMenuLink'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							{navBarText.service.text}
						</Link>
						<ul
							className='dropdown-menu'
							aria-labelledby='navbarDropdownMenuLink'
						>
							{navBarText.service.services.map((service, i) => (
								<li key={i}>
									<Link
										className='dropdown-item'
										to={service.link}
									>
										{service.text}
									</Link>
								</li>
							))}
						</ul>
					</li>
					<li className='nav-item dropdown'>
						<Link
							className='nav-link dropdown-toggle'
							to={navBarText.SecurityAndHealthAtWork.link}
							id='navbarDropdownMenuLink'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							{navBarText.SecurityAndHealthAtWork.text}
						</Link>
						<ul
							className='dropdown-menu'
							aria-labelledby='navbarDropdownMenuLink'
						>
							{navBarText.SecurityAndHealthAtWork.services.map(
								(service, i) => (
									<li key={i}>
										<Link
											className='dropdown-item'
											to={service.link}
										>
											{service.text}
										</Link>
									</li>
								)
							)}
						</ul>
					</li>
					<li className='nav-item dropdown'>
						<Link
							className='nav-link dropdown-toggle'
							to={navBarText.naturalPerson.link}
							id='navbarDropdownMenuLink'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							{navBarText.naturalPerson.text}
						</Link>
						<ul
							className='dropdown-menu'
							aria-labelledby='navbarDropdownMenuLink'
						>
							{navBarText.naturalPerson.services.map(
								(service, i) => (
									<li key={i}>
										<Link
											className='dropdown-item'
											to={service.link}
										>
											{service.text}
										</Link>
									</li>
								)
							)}
						</ul>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							href={navBarText.footerContact.link}
						>
							{navBarText.footerContact.text}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
