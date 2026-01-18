'use client';

import Link from 'next/link';

const roles = [
	{
		id: 'bar-owner',
		title: 'Bar Owner & Management',
		subtitle: 'Build your venue profile, connect with talent, showcase your establishment',
		description: 'Join as a venue owner to connect with experienced bartenders, talented musicians, and loyal customers. Showcase your bar, promote events, and build your reputation in the Quad Cities nightlife scene.',
		gradient: 'audience-bg-1',
		href: '/join/bar-owner',
		features: ['Verified venue profile', 'Talent discovery network', 'Event promotion tools', 'Customer reviews & feedback']
	},
	{
		id: 'bartender',
		title: 'Professional Bartender',
		subtitle: 'Showcase your skills, find opportunities, build your reputation',
		description: 'Connect with quality venues that value professional bartenders. Build your profile, showcase signature drinks, and advance your career in the industry.',
		gradient: 'audience-bg-2',
		href: '/join/bartender',
		features: ['Professional skill profile', 'Direct venue connections', 'Career advancement tools', 'Industry recognition']
	},
	{
		id: 'musician',
		title: 'Musicians & Artists',
		subtitle: 'Get discovered, book gigs, build your following',
		description: 'Connect directly with venues looking for live music. Build your fanbase, showcase your performances, and grow your music career in the Quad Cities.',
		gradient: 'audience-bg-3',
		href: '/join/musician',
		features: ['Artist profile & portfolio', 'Direct venue booking', 'Fan discovery platform', 'Performance history tracking']
	},
	{
		id: 'bar-worker',
		title: 'Bar Support Staff',
		subtitle: 'Barbacks, security, door staff - all essential roles',
		description: 'Supporting roles are crucial to venue success. Find opportunities in security, door staff, barback positions, and other essential venue operations.',
		gradient: 'audience-bg-4',
		href: '/join/bar-worker',
		features: ['Position matching', 'Skill development resources', 'Career progression paths', 'Industry connections']
	},
	{
		id: 'distributor',
		title: 'Industry Partners',
		subtitle: 'Distributors, suppliers, and service providers',
		description: 'Connect with venues as a distributor, equipment supplier, or service provider. Build business relationships and grow your client base.',
		gradient: 'audience-bg-5',
		href: '/join/distributor',
		features: ['B2B networking platform', 'Venue connection tools', 'Market insights', 'Partnership opportunities']
	},
	{
		id: 'patron',
		title: 'Music & Nightlife Enthusiasts',
		subtitle: 'Discover new venues, support local artists, join the community',
		description: 'Join as a community member to discover new venues, follow your favorite artists, and stay connected with the best of Quad Cities nightlife.',
		gradient: 'audience-bg-6',
		href: '/join/patron',
		features: ['Venue discovery tools', 'Artist following system', 'Event recommendations', 'Community engagement']
	}
];

export default function JoinPage() {
	return (
		<div className="bg-black text-white min-h-screen">
			<div className="bg-gradient"></div>
			<div className="float-element float-1"></div>
			<div className="float-element float-2"></div>
			<div className="float-element float-3"></div>

			{/* Hero Section */}
			<section className="hero">
				<div className="hero-bg"></div>
				<div className="hero-content">
					<div className="hero-subtitle">Join the Community</div>
					<h1 className="hero-title">
						Find Your <span className="gradient-text">Place</span><br />
						in the Scene
					</h1>
					<p className="hero-description">
						Whether you pour drinks, play music, own a venue, or just love the nightlife—<br />
						there's a place for you in the Quad Cities scene.
					</p>
				</div>
			</section>

			{/* Role Selection */}
			<section className="py-32 px-16 relative z-10">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-20">
						<h2 className="text-6xl font-black mb-6">Choose Your Role</h2>
						<p className="text-xl text-white/60 max-w-3xl mx-auto">
							Select the role that best describes you. You can always add additional roles or update your profile later.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{roles.map((role) => (
							<Link
								key={role.id}
								href={role.href}
								className="group block"
							>
								<div className="relative h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-transform duration-500 group-hover:scale-105">
									<div className={`${role.gradient} absolute top-0 left-0 w-full h-full transition-transform duration-500 group-hover:scale-110`} />
									<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
									<div className="absolute bottom-0 left-0 p-8 z-10">
										<h3 className="text-2xl font-extrabold mb-3">{role.title}</h3>
										<p className="text-white/90 mb-4 font-medium">{role.subtitle}</p>
										<p className="text-white/70 text-sm mb-6 leading-relaxed">{role.description}</p>
										<div className="space-y-2 mb-6">
											{role.features.map((feature, index) => (
												<div key={index} className="flex items-center gap-2">
													<div className="w-2 h-2 rounded-full bg-white/60" />
													<span className="text-white/80 text-sm">{feature}</span>
												</div>
											))}
										</div>
										<div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
											Join as {role.title.split(' ')[0]} →
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Process Steps */}
			<section className="py-32 px-16 relative z-10">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-20">
						<h2 className="text-5xl font-black mb-6">Simple Sign-Up Process</h2>
						<p className="text-xl text-white/60">Get started in just a few minutes</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div className="text-center">
							<div className="w-20 h-20 rounded-full bg-qc-primary/20 flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl font-black text-qc-primary">1</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Choose Your Role</h3>
							<p className="text-white/60">Select the role that best describes your position in the nightlife scene. You can add multiple roles later.</p>
						</div>
						<div className="text-center">
							<div className="w-20 h-20 rounded-full bg-qc-orange/20 flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl font-black text-qc-orange">2</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Build Your Profile</h3>
							<p className="text-white/60">Add your details, experience, and what makes you unique. This helps others in the community find and connect with you.</p>
						</div>
						<div className="text-center">
							<div className="w-20 h-20 rounded-full bg-qc-yellow/20 flex items-center justify-center mx-auto mb-6">
								<span className="text-3xl font-black text-qc-yellow">3</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Start Connecting</h3>
							<p className="text-white/60">Connect with venues, artists, industry professionals, and fellow community members. Your network starts here.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-32 px-16 relative z-10">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-5xl font-black mb-6">Why Join QCMix?</h2>
					<p className="text-xl text-white/60 mb-16">The benefits of being part of the Quad Cities nightlife community</p>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
							<div className="text-4xl mb-4">🔗</div>
							<h3 className="text-lg font-bold mb-2">Direct Connections</h3>
							<p className="text-white/60 text-sm">Skip the middlemen and connect directly with the people you need to reach.</p>
						</div>
						<div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
							<div className="text-4xl mb-4">📈</div>
							<h3 className="text-lg font-bold mb-2">Grow Your Network</h3>
							<p className="text-white/60 text-sm">Build meaningful relationships that advance your career or business goals.</p>
						</div>
						<div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
							<div className="text-4xl mb-4">🎯</div>
							<h3 className="text-lg font-bold mb-2">Targeted Opportunities</h3>
							<p className="text-white/60 text-sm">Find opportunities that match your skills, location, and career aspirations.</p>
						</div>
						<div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
							<div className="text-4xl mb-4">🏆</div>
							<h3 className="text-lg font-bold mb-2">Build Your Reputation</h3>
							<p className="text-white/60 text-sm">Showcase your work, get reviews, and build a reputation that opens doors.</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="cta-container">
					<h2 className="cta-title">Ready to Join?</h2>
					<p className="cta-description">
						Choose your role above to get started, or learn more about<br />
						what makes QCMix special.
					</p>
					<div className="cta-buttons">
						<button 
							className="btn-primary" 
							onClick={() => document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')?.scrollIntoView({ behavior: 'smooth' })}
						>
							Choose Your Role
						</button>
						<Link href="/" className="btn-secondary">Back to Home</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
