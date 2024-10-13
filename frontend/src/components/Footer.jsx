const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
			<div className='flex flex-col items-center justify-center gap-4 md:h-24'>
				<p className='text-center text-sm leading-loose text-muted-foreground'>
					© 2024 StreamStash. Built by Rishabh & Aaditya.<br />
					The source code is available on{" "}
					<a
						href='https://github.com/19rishabh/StreamStash'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
