import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'models';
import { SortedColumn } from '../../../shared/components/list/list-header/list-header.types';

//const getFullName = (user: User, year: number) => (user.profile ? user.profile.firstName + user.profile.lastName : '');
const getFirstName = (user: User, year: number) => (user.profile ? user.profile.firstName : '');
const getLastName = (user: User, year: number) => (user.profile ? user.profile.lastName : '');
const getAddress = (user: User, year: number) => user?.profile?.address?.latitude || Number.MIN_VALUE;
const getAge = (user: User, year: number) => user.profile?.birthDay || Number.MAX_VALUE;
const getSeniority = (user: User, year: number) => user.bereavedProfile?.slains?.[0]?.deathDate || Number.MAX_VALUE;
const getActive = (user: User, year: number) => user.lastSignInDate||Number.MAX_VALUE;

//const getGuidance = (user: User, year: number) => user.bereavedParticipation?.[year]?.guidance?.general || '';
const getStatus = (user: User, year: number) => user.bereavedParticipation?.[year]?.status || '';
const getMeetings = (user: User, year: number) => user.bereavedParticipation?.[year]?.meetings?.length || 0;

const valueGetter = {
  firstName: getFirstName,
  lastName: getLastName,
  address: getAddress,
  age: getAge,
  seniority: getSeniority,
  active: getActive,
  status: getStatus,
  meetings: getMeetings
};
const getValue = (user: User, year: number, column) =>
  column in valueGetter ? valueGetter[column](user, year) : user[column] || '';

@Pipe({
  name: 'sortBereaveds'
})
export class SortBereavedsPipe implements PipeTransform {
  transform(bereaveds: User[], { column, direction }: SortedColumn, year: number): User[] {
    if (!column) {
      return bereaveds;
    }
    return bereaveds.slice().sort((a, b) => {
      let aValue = getValue(a, year, column);
      let bValue = getValue(b, year, column);

      if (direction === 'desc') {
        [aValue, bValue] = [bValue, aValue];
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      }

      return aValue.toString().localeCompare(bValue);
    });
  }
}
