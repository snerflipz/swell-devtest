import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReviewsService {
	constructor(private prisma: DatabaseService) {}

	getReviewsCount() {
		return this.prisma.review.count();
	}

	getReviews() {
		//console.log(this.prisma.review);
		return this.prisma.review.findMany({
			orderBy: [{ createdOn: 'desc' }],
			include: {
				company: true,
				user: true,
			},
		});
		//return this.prisma.review;
	}
}
