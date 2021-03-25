export const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export interface ICategory {
	label: string;
	value: number;
}

export const CATEGORIES: ICategory[] = [
	{
		label: 'Bảng tin',
		value: 0
	},
	{
		label: 'Ăn Uống',
		value: 1
	},
	{
		label: 'Du lichk - Phượt',
		value: 2
	},
	{
		label: 'Tin tức - Thời sự',
		value: 3
	},
	{
		label: 'Chuyện vặt',
		value: 4
	},
	{
		label: 'Hài',
		value: 5
	},
	{
		label: 'Reddit',
		value: 6
	},
	{
		label: 'Quora',
		value: 7
	},
	{
		label: 'Tuổi teen',
		value: 8
	},
	{
		label: 'Tình yêu - Tình bạn',
		value: 9
	},
	{
		label: 'Hỏi đáp- Tư vẫn',
		value: 10
	},
	{
		label: 'Tâm sự - Chuyện đời',
		value: 11
	},
	{
		label: 'Ảnh',
		value: 12
	},
	{
		label: 'Video',
		value: 13
	},
	{
		label: 'Nhạc',
		value: 14
	},
	{
		label: 'Phim - TV',
		value: 15
	},
	{
		label: 'Thể thao',
		value: 16
	},
	{
		label: 'Sức khỏe - Y tế',
		value: 17
	},
	{
		label: 'Thời trang - Làm đẹp',
		value: 18
	},
	{
		label: 'Mẹo hay',
		value: 19
	},
	{
		label: 'Truyền cảm hứng',
		value: 20
	},
	{
		label: 'Nghệ thuật',
		value: 21
	},
	{
		label: 'Nhiếp ảnh',
		value: 22
	},
	{
		label: 'Đời sống',
		value: 23
	},
	{
		label: 'Thủ công - Tự làm',
		value: 24
	},
	{
		label: 'Vường - Ao - Chuồng',
		value: 25
	},
	{
		label: 'Thú Cưng - Động vật',
		value: 26
	},
	{
		label: 'Kinh doanh - Khởi nghiệp',
		value: 27
	},
	{
		label: 'Chứng khoán - Kinh tế',
		value: 28
	},
	{
		label: 'Xe cộ',
		value: 29
	},
	{
		label: 'Nhà cửa - Nội thất',
		value: 30
	},
	{
		label: 'Phong thủy',
		value: 31
	},
	{
		label: 'Kiến trúc - Xây dụng',
		value: 32
	},
	{
		label: 'Phong cảnh',
		value: 33
	},
	{
		label: 'Học đường - Giáo dục',
		value: 34
	},
	{
		label: 'Truyện tranh',
		value: 35
	},
	{
		label: 'Sách',
		value: 36
	},
	{
		label: 'Thơ',
		value: 37
	},
	{
		label: 'Văn - Truyện',
		value: 38
	},
	{
		label: 'Ma - Kinh dị',
		value: 39
	},
	{
		label: 'Bí ẩn',
		value: 40
	},
	{
		label: 'Lịch sử',
		value: 41
	},
	{
		label: 'Thiên văn - Địa lý',
		value: 42
	},
	{
		label: 'Tôn giáo - Triết học',
		value: 43
	},
	{
		label: 'Từ vi - Số mệnh',
		value: 44
	},
	{
		label: 'Công Nghệ',
		value: 45
	},
	{
		label: 'Lập trình - Phần mềm',
		value: 46
	},
	{
		label: 'Game',
		value: 47
	},
	{
		label: 'Khoa học',
		value: 48
	},
	{
		label: 'Kỹ thuật',
		value: 49
	},
	{
		label: 'Toán - Lý - Hoá',
		value: 50
	},
	{
		label: 'Việt Nam',
		value: 51
	},
	{
		label: 'Thế giới',
		value: 52
	},
	{
		label: 'Etc ...',
		value: 53
	}
];
