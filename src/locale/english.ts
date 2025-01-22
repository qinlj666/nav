// 开源项目，未经作者同意，不得以抄袭/复制代码/修改源代码版权信息。
// Copyright @ 2018-present xiejiahe. All rights reserved.
// See https://github.com/xjh22222228/nav
import { isSelfDevelop } from 'src/utils/util'

const english: Record<string, any> = {
  _loading: 'Loading...',
  _webTitle: 'Discovery Navigation',
  _uncategorized: 'Unclassified',
  _modifySuccess: 'Modification succeeded!',
  _copySuccess: 'Copy succeeded!',
  _copyUrl: 'Copy Link',
  _shareWeb: 'Share site',
  _edit: 'Edit',
  _sort: 'Sort',
  _refresh: 'Refresh',
  _add: 'Add',
  _del: 'Delete',
  _apply: 'Apply',
  _batchDel: 'Delete',
  _confirmDel: 'Are you sure you want to delete?',
  _default: 'Default',
  _title: 'Title',
  _defaultTitle: 'Default website title',
  _desc: 'Description',
  _link: 'Link',
  _current: 'Current',
  _empty: `Sorry, we didn't find the result you want~`,
  _goBack: 'Go Back',
  _viewInfo: 'View Info',
  _syncData: 'Sync Data',
  _addData: 'Add Data',
  _collapse: 'Open',
  _put: 'Fold',
  _closeDark: 'Close Dark',
  _openDark: 'Open Dark',
  _switchTo: 'Switch To',
  _infoTip: 'Only you can view the following information, please rest assured!',
  _know: 'Know',
  _devBranch: 'Deploy branch',
  _curVer: 'Current Version',
  _newVer: 'Latest Version',
  _prevDevTime: 'Last build time',
  _unknow: 'Unknow',
  _repeatOper: 'Please do not operate frequently',
  _syncDataOut: isSelfDevelop
    ? 'Are you sure to save'
    : 'Synchronize data to remote',
  _confirmSync: 'OK',
  _confirmSyncTip: isSelfDevelop
    ? ''
    : 'Are you sure to synchronize all data to the remote end?',
  _syncSuccessTip: isSelfDevelop
    ? 'OK'
    : 'The synchronization is successful. It takes about 5 minutes to build',
  _error: 'Error',
  _syncFailTip: 'Synchronization failed, please try again',
  _inputToken: 'Please enter token',
  _inputTokenMsg: isSelfDevelop
    ? 'Please input a password'
    : 'Please enter your token below for login verification',
  _getToken: `I don't know how to get the token?`,
  _readDoc: 'Please read our guide first',
  _authLogin: 'Please authorize login',
  _pleaseInputToken: 'Please fill in the correct token',
  _tokenVerSuc: 'Authorization succeeded!',
  _tokenVerFail: 'Token validation failed',
  _repeatAdd: 'Please do not add repeatedly',
  _addSuccess: 'Successfully added!',
  _delSuccess: 'Delete succeeded!',
  _saveSuccess: 'Saved successfully!',
  _errorBookTip: 'Error: bookmark resolution failed',
  _importSuccess: 'Import succeeded!',
  _acceptPng: 'Only PNG format is supported',
  _updateLogoSuccess:
    'The replacement was successful. It needs to be updated the next day due to CDN cache problems',
  _updateLogoFail: 'Failed to replace logo, please try again!',
  _resetInitData: 'Undo all actions',
  _confirmReset: 'OK reset',
  _warnReset: 'All current operations will revert to the last build state',
  _resetSuccess: 'The data has been reset back to its initial state',
  _sel3: 'Please select Level 3 category',
  _sel2: 'Please select Level 2 category',
  _sel1: 'Please select Level 1 category',
  _reserveOne: 'At least one item is reserved. Please add it first!',
  _icon: 'ICON',
  _backHome: 'GO Home',
  _syncRemote: 'Sync to remote',
  _uploading: 'Uploading...',
  _addTag: 'Add category',
  _addWeb: 'Add site',
  _clickEdit: 'Click Edit',
  _allContentMsg1:
    '1. After setting all data, click "synchronize to remote end" and drag the table to sort',
  _allContentMsg2: '2. Website category needs to be maintained manually,',
  _updateLogo: 'Replace logo',
  _tagName: 'Category name',
  _onlyOwnVisible: 'Only Self',
  _createAt: 'Create At',
  _action: 'Action',
  _delWarn:
    'This will delete all data under the category. Are you sure you want to delete it?',
  _mgr1: 'Management level 1 category',
  _mgr2: 'Management level 2 category',
  _mgr3: 'Management level 3 category',
  _mgrWeb: 'Management website',
  _webName: 'Name',
  _webTag: 'Website category',
  _webDesc: 'Description',
  _webLink: 'Link',
  _requiredName: 'Please enter a name',
  _requiredLink: 'Please enter the website link',
  _uploadSuccess: 'Uploaded successfully',
  _uploadFail: 'Upload failed, please try again!',
  _notUpload: 'Please do not upload illegal pictures',
  _shortcut: 'Shortcut',
  _score: 'Score',
  _iconAddr: 'Icon Link',
  _copyUpload: 'Support to paste screenshots or copy pictures here to upload',
  _upload: 'Upload',
  _continueAdd: 'Continue adding associated links or tags',
  _moveTo: 'Move to',
  _move: 'Move',
  _copy: 'Copy',
  _moveSuccess: 'Moved successfully',
  _save: 'Save',
  _color: 'Color',
  _remark: 'Description/Remark',
  _about: 'About',
  _webInfo: 'Web info',
  _systemSet: 'Settings',
  _searchEngines: 'Engines',
  _userCollect: 'Collect',
  _bookmarkImport: 'Book Import',
  _bookmarkExport: 'Book Export',
  _vipAuth: 'Bind domain',
  _tagSettings: 'Tag',
  _websiteMang: 'Website',
  _addRow: 'Add',
  _engineName: 'Engine name',
  _status: 'Status',
  _isDisable: 'Disable',
  _webLogo: 'LOGO',
  _defLanguage: 'Default Language',
  _pageLoad: 'Page Loading',
  _random: 'Random',
  _noSet: 'No set',
  _showGithub: 'Show Github',
  _defTheme: 'Default Theme',
  _appTheme: 'App Theme',
  _keywords: 'Keywords',
  _footHtml: 'Foot HTML',
  _headHtml: 'Head HTML',
  _showWeather: 'Show weather',
  _weatherTip: 'Currently only the "Shortcut" theme is supported',
  _theme: 'Theme',
  _backgroundImage: 'Picture',
  _engineUrl: 'Engine URL',
  _actionSuccess: 'Succeeded',
  _jumpAddr: 'Jump address',
  _backup: 'Backup',
  _bannerHeight: 'Banner height',
  _autoPlay: 'Auto play',
  _importBackup: 'Import backup',
  _importBackupTip:
    'After importing, all current website data will be cleared and imported',
  _showLanguage: 'Display switch language',
  _showRate: 'Show rate',
  _showCopy: 'Display Card Copy',
  _showShare: 'Show card sharing',
  _angleMark: 'Angle Mark',
  _logout: 'Logout Account',
  _cardStyle: 'Card style',
  _tagPlaceholder: 'Can be empty as a regular label',
  _dragSort: 'Drag to sort',
  _checkWeb:
    'Last time, {count} website links were detected to be invalid. Please refer to the management website for details. If you need to check the status again, simply click Save to trigger the event.',
  _buildTip:
    'After modification, please save and wait for the build to complete. Leaving is invalid',
  _enableSEO: 'Enable SEO (loading slightly slower)',
  _allowCollect: 'Allow users to submit indexed content',
  _collectMenuView: `Please refer to the user's inclusion menu for specific details`,
  _displaySwitchTheme: 'Display Switch Theme',
  _requestAddress: 'Request Address',
  _requestTip:
    'when the save button is clicked, a GET request is sent to fill in the address',
  _followPage: 'Follow Page',
  _bannerTip:
    'When the height is 0, the width and height of the image will be adaptive, and it is important to ensure that each image has the same size',
  _checkStatus:
    'Check website link status(For any of the above updates, it is recommended to enable this, as it takes the same amount of time.)',
  _standard: 'Standard',
  _column: 'Column',
  _simplicity: 'Simplicity',
  _original: 'Original',
  _navOver: 'First level navigation beyond display',
  _scrollBar: 'Scroll bar',
  _ellipsis: 'Ellipsis',
  _sidebarImg: 'Sidebar image',
  _sidebarTitle: 'Sidebar title',
  _defTitle4: 'Default website title, recommended to be within 4 words',
  _inputAuthCode: 'Please enter the authorization code',
  _waitHandle: 'Waiting for the stationmaster to handle',
  _collect: 'Get',
  _confirmCollect: 'Are you sure?',
  _pendingGet: 'Getting...',
  _logoutAuthCode: 'Exit',
  _spiderRule: 'Spider rule',
  _spiderIcon: 'Spider icon',
  _spiderDesc: 'Spider description',
  _notSpider: 'Not updating',
  _spiderTitle: 'Spider title',
  _spiderAlways: 'Always update',
  _spiderEmpty: 'Update for empty time',
  _spiderStatus: 'Spider Status',
  _spiderTip:
    'Crawling rules will be triggered every time saving, affecting the construction speed. Crawling and updating information may be necessary when necessary',
  _spiderQty: 'Concurrent quantity',
  _spiderQtyTip: '',
  _spiderNetTip:
    'Due to network factors, some websites may not be accessible and can be skipped directly. For reference only',
  _spiderBuildTip:
    'After the construction is completed, the data is correct. Please go to the website management and click save once, otherwise the data will not be permanently stored',
  _associatedLabels: 'Labels',
  _menuCollapse: 'Menu Collapse',
  _retro: 'Retro',
  _accessTimeout: 'Access timeout (seconds)',
  _accessTimeoutTip:
    'Crawl the website for a specified number of seconds with no response, skip, The larger the number, the higher the success rate, but the slower it is',
  _imageCDN: 'Image CDN',
  _docTitle: 'Document title',
  _importEnter: `Enter in browser <a href="chrome://bookmarks/" target="_blank">chrome://bookmarks/</a> Find the export bookmark, export the HTML file, click import below`,
  _buildSuccess: 'Build succeed',
  _bindDomain: `Bind domain names, multiple separated by commas, without including protocols such as "example.com,xjh22222228.github.io"`,
  _clickExport: 'Click on me to export',
  _exportIcons: 'Simultaneously exporting website icons takes a long time',
  _errorIcons: 'The following icons cannot be processed properly:',
  _processing: 'Processing',
  _weeks: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  _shortMonth: ' / ',
  _shortDay: '',
  _classNoMatch: 'Classification mismatch, using the default first category',
  _openSearch: 'Enter link to allow searching',
  _moveUp: 'Up',
  _moveDown: 'Down',
  _footTemplate: 'Template',
  _footTemplateDesc:
    'All bottom HTML is universal, copy the obtained template code to the desired theme or global setting, existing variable: ${total} = Number of websites; ${hostname} = Domain name; ${year} = This year; class="applyweb" = Add web',
  _builtTailwind: `System is already built-in <a href="https://play.tailwindcss.com" target="_blank">https://play.tailwindcss.com</a> You don't need to write`,
  _quick: 'Quick',
  _components: 'Components',
  _calendar: 'Calendar',
  _submit: 'Submit',
  _cancel: 'Cancel',
  _topColor: 'Top background color',
  _bgColor: 'Background color',
  _runtime: 'Running time',
  _runtimeTitle: 'Title',
  _offWork: 'Off work',
  _workTitle: 'Work title',
  _restTitle: 'Rest title',
  _image: 'Image',
  _text: 'Text',
  _countdown: 'Count down',
  _dateColor: 'Date color',
  _timeColor: 'Time color',
  _date: 'Date',
  _time: 'Time',
  _workHours: 'Work hours',
  _breakTime: 'Break time',
  _holiday: 'Holiday',
  _year: 'Year',
  _day: 'Day',
  _calendarDate: '{year}.{month}',
  _dayOfYear: 'Day {day}',
  _errCountTip:
    "Last time, {count} website links were detected to be invalid. Please refer to the management website for details. If you need to check the status again, simply click on 'Save' to trigger the event.",
  _getErrorWeb: 'Get error web',
  _categoryName: 'Name',
  _dayIs: 'Today is',
  _rest: 'R',
  _distance: 'Distance',
}

export default english