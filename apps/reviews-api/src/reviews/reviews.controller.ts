import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsCountResponse, ReviewsResponse } from './reviews.types';

@Controller('reviews')
export class ReviewsController {
	constructor(private reviewsService: ReviewsService) {}

	@Get()
	async getReviews(): Promise<ReviewsResponse> {
		//throw new NotFoundException('Not implemented');
		const reviews = await this.reviewsService.getReviews();
		console.log(reviews);
		return { reviews };
	}

	@Get('/count')
	async getReviewsCount(): Promise<ReviewsCountResponse> {
		const reviewsCount = await this.reviewsService.getReviewsCount();
		return { reviewsCount };
	}
}
