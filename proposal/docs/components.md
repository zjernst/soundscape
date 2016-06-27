## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)


* **App**
  * Navbar
  * WelcomeIndex
    * WelcomeIndexItem
  * EnvironmentsIndex
    * EnvironmentsIndexItem
  * **TrackIndex**
    * TrackIndexItem
    * SearchSortIndex
      * Search
      * Sort
    * **TrackDetail**
      * TrackTags
      * TrackEdit
    * TrackForm
  * RecentActivityIndex
    * RecentlyAddedItem
    * MemberActivityItem
  * AdditionalInfoIndex
    * AdditionalInfoIndexItem
  * Business
  * **UserPage**
    * Profile
      * ProfilePic
      * UserStats
    * TrackIndex
    * CommunityIndex
      * CommunityIndexItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `TracksIndex` **path:** `environments/:environmentsId`
    * **component:** `TrackDetail` **path:** `tracks/:trackId`
  * **component:** `TracksIndex` **path:** none
    * **component:** `TrackDetail` **path:** `tracks/:trackId`
  * **component:** `UserPage` **path:** `users/:userId`
