import Image from 'next/image';
import Link from 'next/link';

const roles = [
	{
		id: 'bar-owner',
		title: 'Bar Owner & Management',
		subtitle: 'Ownership, management, and venue operations.',
		image: '/images/roles/bar_owner.jpg',
		href: '/join/bar-owner',
	},
	{
		id: 'bartender',
		title: 'Bartender',
		subtitle: 'Guest-facing bar service and floor leadership.',
		image: '/images/roles/Bartender.jpg',
		href: '/join/bartender',
	},
	{
		id: 'bar-worker',
		title: 'Bar Worker',
		subtitle: 'Barback, BOH, security, and door staff.',
		image: '/images/roles/bar_worker.jpg',
		href: '/join/bar-worker',
	},
	{
		id: 'distributor',
		title: 'Distributor',
		subtitle: 'Beverage distribution and brand representation.',
		image: '/images/roles/Distributors-&-Industry-Partners.jpg',
		href: '/join/distributor',
	},
	{
		id: 'musician',
		title: 'Musician',
		subtitle: 'Performing artists and working musicians.',
		image: '/images/roles/musician.jpg',
		href: '/join/musician',
	},
	{
		id: 'patron',
		title: 'Patron',
		subtitle: 'Supporters and regular participants in the scene.',
		image: '/images/roles/Patron.jpg',
		href: '/join/patron',
	},
];

export default function JoinPage() {
	return (
		<main className="bg-[#08080f] min-h-screen">
			{/* ==================== HERO ==================== */}
			<section className="relative pt-32 pb-24 px-6 overflow-hidden">
				{/* Background gradient orbs */}
				<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -translate-y-1/2" />
				<div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2" />

				<div className="relative z-10 max-w-4xl mx-auto text-center">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-white/60 mb-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4 text-violet-400"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
							/>
						</svg>
						<span>Industry Join</span>
					</div>

					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
						<span className="text-gray-900">Choose your</span>
						<br />
						<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
							primary role
						</span>
					</h1>

					<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
						Select the role that best matches what you do most. Roles
						determine permissions and tools — they're functional, not
						status-based.
					</p>
				</div>
			</section>

			{/* ==================== ROLE CARDS ==================== */}
			<section className="px-6 pb-24">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{roles.map((role) => (
							<Link
								key={role.id}
								href={role.href}
								className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 hover:border-indigo-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
							>
								{/* Background Image */}
								<Image
									src={role.image}
									alt={role.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

								{/* Content */}
								<div className="absolute inset-0 flex flex-col justify-end p-8">
									<h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
										{role.title}
									</h2>
									<p className="text-gray-500 text-sm mb-6">
										{role.subtitle}
									</p>

									{/* CTA */}
									<div className="flex items-center gap-2 text-indigo-500 group-hover:text-indigo-700 transition-colors">
										<span className="text-sm font-medium">Continue</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2}
											stroke="currentColor"
											className="w-4 h-4 group-hover:translate-x-1 transition-transform"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
											/>
										</svg>
									</div>
								</div>

								{/* Hover Glow */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-indigo-600/10 to-transparent pointer-events-none" />
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* ==================== INFO BAR ==================== */}
			<section className="px-6 pb-32">
				<div className="max-w-4xl mx-auto">
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-t border-b border-gray-200">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5 text-emerald-400"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m4.5 12.75 6 6 9-13.5"
									/>
								</svg>
							</div>
							<span className="text-gray-500 text-sm">
								One role required
							</span>
						</div>

						<div className="hidden md:block w-px h-8 bg-gray-200" />

						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5 text-indigo-400"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 4.5v15m7.5-7.5h-15"
									/>
								</svg>
							</div>
							<span className="text-gray-500 text-sm">
								Add context later
							</span>
						</div>

						<div className="hidden md:block w-px h-8 bg-gray-200" />

						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5 text-amber-400"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
									/>
								</svg>
							</div>
							<span className="text-gray-500 text-sm">
								Role changes reviewed
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* ==================== BACK LINK ==================== */}
			<section className="px-6 pb-20">
				<div className="max-w-4xl mx-auto text-center">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-600 transition-colors group"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
							/>
						</svg>
						<span>Back to home</span>
					</Link>
				</div>
			</section>
		</main>
	);
}
