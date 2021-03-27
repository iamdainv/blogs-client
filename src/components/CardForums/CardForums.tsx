import React from 'react';
import { ICategory } from 'assets/const';
interface Post {
	title?: string;
	username?: string;
	category?: ICategory;
	createdAt: string;
	numberOfComment: number;
	voteNumber: number;
}

const CardForums = () => {
	return (
		<div className='false min-w-0 flex bg-white  rounded-md mb-4'>
			<div
				className='hidden md:block align-stretch w-10 overflow-hidden rounded-tl-md py-2 flex-shrink-0 flex-grow-1 px-1'
				style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
				<div
					className='w-6 h-6 hover:bg-gray-300 rounded cursor-pointer mx-auto'
					style={{ padding: 2 }}>
					<svg
						className='text-red-600 fill-current hover:text-red-700 w-full h-full'
						aria-hidden='true'
						focusable='false'
						data-prefix='fas'
						data-icon='upload'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 400'>
						<path
							fill='currentColor'
							d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 24-24 20 9 20 20 20 20-9 20-20z'
						/>
					</svg>
				</div>
				<div className='text-red-600 false text-center text-sm font-medium'>
					3
				</div>
				<div
					className='w-6 h-6 hover:bg-gray-300 rounded cursor-pointer mx-auto'
					style={{ padding: 2 }}>
					<svg
						className='text-gray-600 fill-current hover:text-blue-700 w-full h-full'
						aria-hidden='true'
						focusable='false'
						data-prefix='fas'
						data-icon='download'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 400'>
						<path
							fill='currentColor'
							d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 24-24 20 9 20 20 20 20-9 20-20z'
						/>
					</svg>
				</div>
			</div>
			<div
				className='ml-1 my-2 flex-shrink-0 hidden md:block'
				style={{ width: 110 }}>
				<a
					className='w-full no-underline'
					href='/post/sao-cha-khong-phan-manh-quynh-official-mv-ost-bo-gia-2021-daibn00-078bbfca'>
					<img
						src='https://litiforumpost.s3-ap-southeast-1.amazonaws.com/2314de928a5011eba1fb06e8ae8e3874.jpg'
						className='w-full rounded-md object-cover'
						style={{ maxHeight: 120 }}
					/>
				</a>
			</div>
			<div className='min-w-0 w-full'>
				<div className='mt-3 mx-3 md:mt-2 md:mx-2 md:mb-1 flex items-center'>
					<a className='hover:underline flex no-underline' href='/chu-de/food'>
						<img
							src='https://kafetopics.s3-ap-southeast-1.amazonaws.com/food.png'
							className='w-4 h-4'
						/>
						<div className='text-gray-600 ml-1' style={{ fontSize: 13 }}>
							Ăn uống - Nấu nướng
						</div>
					</a>
					<div className='mx-1 text-gray-600' style={{ fontSize: 13 }}>
						<span className='text-xs'>•</span> bởi
						<a
							className='hover:underline hover:text-black cursor-pointer text-gray-600 no-underline'
							href='/u/daibn00'>
							daibn00
						</a>
						<span className='text-xs'>•</span> 10 ngày
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='min-w-0 mx-3 md:mx-2 break-words'>
						<a
							className='text-md text-gray-900 font-medium cursor-pointer text-base no-underline'
							href='/post/sao-cha-khong-phan-manh-quynh-official-mv-ost-bo-gia-2021-daibn00-078bbfca'>
							SAO CHA KHÔNG - PHAN MẠNH QUỲNH | OFFICIAL MV | OST BỐ GIÀ 2021
						</a>
						<div
							className='w-full pr-2 mb-1 cursor-pointer truncate min-w-0'
							style={{ fontSize: 13 }}>
							<p className='text-gray-600 no-underline'>
								TLDR; Riot has been nerfing grab bags without compensation or
								explanation since Battle Queens, and it has gotten worse every
								event. I am addicted to grinding pass events and have been doing
								them since Spirit Blossom. I usually get around 6k tokens each
								time, and got 8k for world’s. I usually spend them all on orbs,
								sometimes I get the prestige if they’re really good, but I
								always keep an eye out for what each event Orbs has to offer. If
								the orbs are really good, I sometimes even buy the bundles,
								because as sort of a gambler, I like having the system decide
								what skins I should own rather than buying things myself 🤡. I
								just saw the Space Groove Orbs on Surrender@20 and I was
								genuinely disappointed...for the 3rd event in a row. I’ve
								noticed that ever since Battle Queens, orbs have been lack
								luster and have given pretty much the same things every event.
								It’s just that this time, not only are the orbs bad, but their
								grab bags are even harder to get. Event Orb Grab Bag Drop Rates
								Event orbs all give the same thing and have the same rates
								regardless of event, with the only difference being their
								dropped grab bag. This means that the quality of an event orb is
								dependent on the quality of their grab bags. Space Groove Orbs
								have the description "Open to reveal a guaranteed random Skin
								Shard with a 3.5% chance to obtain a Luxe Bag. Gemstone and
								Mythic Skin Permanent drop rates multiplied by 1.5." Other than
								the Night & Dawn Orbs, Battle Academia, and Psy Ops Orbs, the
								drop rate for a bag has consistently been 4% since maybe Lunar
								Revel 2019, correct me if I’m wrong. I’m only worried about 2020
								bags since they are overall better than the ones from 2019. Even
								so, pretty much every bag from 2020 has been 4% throughout the
								whole year, save for Psy Ops, so what is with the 0.5% decrease
								in drop rate for Space Groove? The only reason that the three
								orbs mentioned above had different rates was because their
								respective bags were better or worse than average, save for
								Battle Academia 2019, which was pretty mediocre (2 perm shards,
								1 975 and under, 1 1350+). Night & Dawn grab bags had double the
								rates but only gave a single 975+ skin shard while Psy Ops had
								half the rates while giving a whopping 9 skin shards with 3
								guaranteed to be epics. What does the grab bag (Luxe bag) for
								Space Groove give? “Open for a truly luxe vibe! Contains 3 skin
								shards worth 750+ RP (70% probability) OR 4 skin shards from any
								tier (30% probability). Gemstone and Mythic Skin Permanent drop
								rates multiplied by 1.5.” A 3.5% chance to get only 4 extra skin
								shards at most, where 70% of the time you’ll get only 3. The
								worst part is that none of these guarantee anything above 750,
								and that has been a theme since the Battle Queens Orbs. The
								Battle Queen Orbs had a 4% chance to drop a Schema Bag, which
								had the description “Open to reveal Katarina's battle spoils!
								Three skin shards of 750RP or higher value (70% probability) OR
								four skin shards of 1350RP or lower value (30% probability).
								Gemstone and Mythic Skin Permanent drop rates multiplied by
								1.5.” Same exact situation with the new Luxe Bag, except getting
								4 skin shards guarantees that you won’t get any legendary or
								ultimate skin. So this 0.5% lower chance of getting a bag is to
								a remove this dumb restriction that made getting more skin
								shards worse than less. The Lunar Beast Orbs also had a 4%
								chance to give a Lunar Squad Bag, which had the description
								“Open to reveal skin shards from past Lunar Revel celebrations
								to amp up your squad's style. 70% chance of 3 shards or 30%
								chance of 4 shards from the Lunar Revel, Firecracker, Mecha
								Kingdoms, and Warring Kingdoms skin lines. Gemstone and Mythic
								Skin Permanent drop rates multiplied by 1.5.” Pretty much the
								same thing as Battle Queens and Space Groove but restricts you
								to 4 skin lines. What is with this ”70% for 3 750+ shards, 30%
								for 4” thing that keeps going on? And why does removing skin
								line restrictions warrant a 0.5% decrease in bag drop rates as
								well? Let’s look at all the other orb grab bags from 2020: Mecha
								Kingdoms Jackpot- “Open to reveal one skin shard of 975 or lower
								value and two skin shards of 1350 value or greater. Gemstone and
								Mythic Skin permanent drop rates multiplied by 1.5.” Mecha
								Kingdoms Lucky Roll- “Open to reveal one skin shard of 1350 or
								greater value. Gemstone and Mythic Skin permanent drop rates
								multiplied by 1.5.” Galaxies 2020 Grab Bag- “Open to reveal a
								random 520 RP skin shard, 750 RP skin shard, 975 RP skin shard,
								1350 RP skin shard, and a 1820 RP skin shard.” Pulsefire 2020
								Grab Bag- “Open to reveal three random skin shards of the same
								tier (30% chance for a set of 750 skin shards, 30% chance for a
								set of 975 skin shards, 30% chance for a set of 1350 skin
								shards, and 10% chance for a set of 1820 skin shards) and 1050
								Orange Essence. Excludes mythic and limited skins.” Kanmei Grab
								Bag- “Open to reveal three skin shards of 975 or greater value
								and three skin shards of 975 or lower value, excluding Mythic
								and Limited skins. Gemstone and Mythic Skin Permanent drop rates
								multiplied by 1.5.” Akana Grab Bag- “Open to reveal three Legacy
								skin shards and three skin shards of 975 or greater value,
								excluding Mythic and Limited skins. Gemstone and Mythic Skin
								Permanent drop rates multiplied by 1.5.” Worlds 10-Year Bag-
								“Open to reveal two Worlds Champions skin shards (iG, SKT T1,
								SSG, SSW, Fnatic, TPA), one Championship skin shard (2013-2019),
								and three random skin shards. Gemstone and Mythic Skin Permanent
								drop rates multiplied by 1.5.” K/DA Origins Bag- “Open to reveal
								one K/DA Origins Bonus Roll and three random skin shards. The
								bonus roll guarantees at least two skin shards from the 2018
								K/DA and True Damage thematics, but the luckiest among us will
								reunite the full gang. Gemstone and Mythic Skin Permanent drop
								rates multiplied by 1.5.” Other than the Pulsefire 2020 Bag,
								every single one of these bags guaranteed a skin shard above
								750. Every bag besides Pulsefire 2020 and Mecha Kingdoms also
								guaranteed AT LEAST 5 skin shards as well, where they still all
								had 4% chance to drop. Even Pulsefire gives 1050 orange essence
								on top of its shards, which is what you get from disenchanting 3
								legendary/4 epic shards. Every single one of these bags are
								miles better than anything that came after Battle Queens, but
								yet all costed the same and what we are getting now, so why has
								loot been nerfed so hard? Even 2019 loot was better than this.
								It’s not just the event orbs, but capsules after Battle Queens
								are also worse than before. Let’s look at the newly released
								Battle Academia 2021 capsules. 4% chance to drop a Durandal Bag,
								which has the description “Open to reveal three Working Life
								skin shards! You'll also get a Fringe Benefit roll (70% chance
								for two 750+ skin shards OR 30% chance for three random skin
								shards). Gemstone and Mythic Skin Permanent drop rates
								multiplied by 1.5. (Working Life is a selection of skins from
								the Chef, Day Job, April Fools, Battle Academia, and Academy
								skinlines.)” 6 skin shards at most, none guaranteed to be over
								750. The capsule bags from 2020 were the High Noon and Star
								Guardian ones, which also had a 4% chance to drop. High Noon
								dropped the Lucky #7 bag, which guaranteed 7 750+ skin shards,
								already more than Durandal bag. Star Guardian dropped an
								interstellar bag, which had the description “Open to reveal a
								gift from the stars! 5 Interstellar skin shards (60%
								probability) OR 7 random skin shards (25% probability) OR 10
								Interstellar skin shards (15% probability). Interstellar skin
								shards are from the Star Guardian, Pajama Guardian, Cosmic, and
								Dark Star thematics. Gemstone and Mythic Skin Permanent drop
								rates multiplied by 1.5.” 10 skin shards at most, where every
								single shard is guaranteed to be an epic or legendary. You sure
								have a high chance of getting only 5 instead, but they’re still
								guaranteed to be epic or legendary as well. There’s the small
								25% chance of getting 7 shards, which is a slightly smaller
								chance than getting 6 shards from the Durandal Bag, but they can
								be any skin line and any tier while 3 Durandal shards are only
								from 5 skin lines. Why the nerfs, Riot? With skins nowadays only
								being 1350 tier or higher, it makes little sense to lower the
								tier bar to 750 for loot. We are also getting more skins every
								year, so it makes even less sense to lower the amount of shards
								we get from grab bags. Now on top of this, we have even lower
								chances for grab bags AKA bonus shards? As if grab bags weren’t
								already hard to get. I don’t know why this nerf trend started
								and I hope future events won’t continue with it, because I’m
								losing motivation to grind events if they’re just going to pay
								off less every time. It felt fun to earn my skins, but I don’t
								want to feed into this “you’re gonna buy it anyways so we can
								charge you more for less” mentality that I’ve seen in almost
								every company nowadays. In the end, they’re just pretty pixels
								so I don’t know why I’m getting worked up over this to be
								honest. I know it sounds entitled to want more free stuff, but
								while grab bags are actually pretty free, it is pretty sad when
								a company suddenly starts being stingy without any transparency,
								especially after being so generous...for 2 years straight.
							</p>
						</div>
					</div>
					<a
						className='mr-2 flex-shrink-0 w-16 h-16 md:hidden no-underline'
						href='/post/sao-cha-khong-phan-manh-quynh-official-mv-ost-bo-gia-2021-daibn00-078bbfca'>
						<img
							src='https://litiforumpost.s3-ap-southeast-1.amazonaws.com/2314de928a5011eba1fb06e8ae8e3874.jpg'
							className='w-full rounded-sm object-cover'
							style={{ maxHeight: 70 }}
						/>
					</a>
				</div>
				<div className='flex ml-3 my-2 md:my-1 md:mx-2 items-center'>
					<div className='md:hidden mr-2'>
						<div className='flex items-center rounded-full border border-gray-400 px-1 py-px'>
							<div
								className='w-6 h-6 hover:bg-gray-300 rounded cursor-pointer mx-auto'
								style={{ padding: 2 }}>
								<svg
									className='text-red-600 fill-current hover:text-red-700 w-full h-full'
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='upload'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 400'>
									<path
										fill='currentColor'
										d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 24-24 20 9 20 20 20 20-9 20-20z'
									/>
								</svg>
							</div>
							<div
								className='text-red-600 false text-gray-600 text-center text-sm font-medium'
								style={{ marginLeft: 2, marginRight: 2 }}>
								3
							</div>
							<div
								className='w-6 h-6 hover:bg-gray-300 rounded cursor-pointer mx-auto'
								style={{ padding: 2 }}>
								<svg
									className='text-gray-600 fill-current hover:text-blue-700 w-full h-full'
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='download'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 400'>
									<path
										fill='currentColor'
										d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 24-24 20 9 20 20 20 20-9 20-20z'
									/>
								</svg>
							</div>
						</div>
					</div>
					<a
						className='text-gray-600 flex items-center rounded hover:bg-gray-200 p-1 cursor-pointer no-underline'
						href='/post/sao-cha-khong-phan-manh-quynh-official-mv-ost-bo-gia-2021-daibn00-078bbfca'>
						<div>
							<i className='fas fa-comment-alt fa-sm' />
						</div>
						<span className='font-medium ml-1 text-sm'>0&nbsp;Bình luận</span>
					</a>
					<div className='relative inline-block text-left'>
						<div className='false text-gray-600 mx-2 p-1 cursor-pointer rounded hover:bg-gray-200 flex items-center'>
							<div className='text-gray-600'>
								<i className='fas fa-share fa-sm' />
							</div>
							<span className='text-sm font-medium ml-1'>Chia sẻ</span>
						</div>
						<div className='invisible z-50 mt-1 absolute rounded border border-gray-400 shadow-lg right-0'>
							<div className='bg-white rounded whitespace-no-wrap shadow-sm'>
								<div className='flex items-center px-4 py-2 hover:bg-green-200 rounded-t cursor-pointer'>
									<div className='text-gray-600 mr-3'>
										<i className='fas fa-link' />
									</div>
									<div>Copy Link</div>
								</div>
								<div className='h-px bg-gray-300' />
								<a
									href='https://www.facebook.com/sharer/sharer.php?u=https://litiroom.com/post/sao-cha-khong-phan-manh-quynh-official-mv-ost-bo-gia-2021-daibn00-078bbfca'
									target='_blank'
									className='no-underline text-black'>
									<div className='flex items-center px-4 py-2 hover:bg-green-200 rounded-b cursor-pointer'>
										<div className='text-blue-700 mr-3'>
											<i className='fab fa-facebook-square' />
										</div>
										<div>Facebook</div>
									</div>
								</a>
								<div className='h-px bg-gray-300' />
								<a
									href='https://twitter.com/share?url=https://litiroom.com/post/sao-cha-khong-phan-manh-quynh-official-mv-ost-bo-gia-2021-daibn00-078bbfca'
									target='_blank'
									className='no-underline text-black'>
									<div className='flex items-center px-4 py-2 hover:bg-green-200 rounded-b cursor-pointer'>
										<div className='text-blue-500 mr-3'>
											<i className='fab fa-twitter' />
										</div>
										<div>Twitter</div>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className='relative inline-block text-left'>
						<div>
							<span className='rounded shadow-sm'>
								<div className='false text-gray-700 select-none bg-white cursor-pointer px-1 rounded hover:bg-gray-200'>
									<i className='fas fa-ellipsis-h' />
								</div>
							</span>
						</div>
						<div className='invisible z-50 mt-1 absolute rounded border border-gray-400 shadow-lg right-0'>
							<div className='bg-white rounded whitespace-no-wrap shadow-sm text-black'>
								<div className='block flex items center py-2 hover:bg-green-200 cursor-pointer pl-5 pr-6 rounded-t'>
									<div className='text-gray-700 mr-3'>
										<i className='far fa-edit fa-sm' />
									</div>
									<div>Sửa bài viết</div>
								</div>
								<div className='block flex items center py-2 hover:bg-green-200 cursor-pointer pl-5 pr-6 rounded-b'>
									<div className='text-gray-700 mr-3'>
										<i className='far fa-trash-alt fa-sm' />
									</div>
									<div>Xóa bài viết</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden' id='html11EB8661078BC15CA1FB06E8AE8E3874'>
				<p>
					<a href='https://www.youtube.com/watch?v=r7uHSjHAMqc'>
						https://www.youtube.com/watch?v=r7uHSjHAM
					</a>
					<img
						className='abm0'
						src='https://litiforumpost.s3-ap-southeast-1.amazonaws.com/2314de928a5011eba1fb06e8ae8e3874.jpg'
					/>
				</p>
			</div>
		</div>
	);
};

export default CardForums;
