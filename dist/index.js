"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
const get_rounded_up_down_1 = require("@writetome51/get-rounded-up-down");
const array_get_head_tail_1 = require("@writetome51/array-get-head-tail");
const in_range_1 = require("@writetome51/in-range");
const not_1 = require("@writetome51/not");
function getPage(pageNumber, itemsPerPage, array) {
    errorIfRequestedPageDoesNotExist(pageNumber);
    const firstIndexToGet = (itemsPerPage * (pageNumber - 1));
    if (isLastPage(pageNumber))
        return getRemainingItems(firstIndexToGet);
    else
        return array_get_adjacent_at_1.getAdjacentAt(firstIndexToGet, itemsPerPage, this.data);
    function errorIfRequestedPageDoesNotExist(pageNumber) {
        let totalPages = getTotalPages();
        if (totalPages === 0 || not_1.not(in_range_1.inRange([1, totalPages], pageNumber))) {
            throw new Error('The requested page does not exist');
        }
    }
    function getTotalPages() {
        return get_rounded_up_down_1.getRoundedUp(array.length / itemsPerPage);
    }
    function isLastPage(pageNumber) {
        return (pageNumber === getTotalPages());
    }
    function getRemainingItems(firstIndexToGet) {
        let numItemsToGet = (array.length - firstIndexToGet);
        return array_get_head_tail_1.getTail(numItemsToGet, array);
    }
}
exports.getPage = getPage;
