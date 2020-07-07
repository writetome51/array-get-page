import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import { getTail } from '@writetome51/array-get-head-tail';
import { inRange } from '@writetome51/in-range';
import { not } from '@writetome51/not';


export function getPage(pageNumber, itemsPerPage, array): any[] {

	errorIfRequestedPageDoesNotExist(pageNumber);

	const firstIndexToGet = (itemsPerPage * (pageNumber - 1));

	if (isLastPage(pageNumber)) return getRemainingItems(firstIndexToGet);
	else return getAdjacentAt(firstIndexToGet, itemsPerPage, array);


	function errorIfRequestedPageDoesNotExist(pageNumber) {
		let totalPages = getTotalPages();

		if (totalPages === 0 || not(inRange([1, totalPages], pageNumber))) {
			throw new Error('The requested page does not exist');
		}
	}


	function getTotalPages(): number {
		return getRoundedUp(array.length / itemsPerPage);
	}


	function isLastPage(pageNumber): boolean {
		return (pageNumber === getTotalPages());
	}


	function getRemainingItems(firstIndexToGet) {
		let numItemsToGet = (array.length - firstIndexToGet);
		return getTail(numItemsToGet, array);
	}


}
