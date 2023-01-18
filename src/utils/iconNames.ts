const iconNames = [
  "Svg3DAddHole",
  "Svg3DArcCenterPt",
  "Svg3DArc",
  "Svg3DBridge",
  "Svg3DCenterBox",
  "Svg3DEllipseThreePts",
  "Svg3DEllipse",
  "Svg3DPtBox",
  "Svg3DRectCornerToCorner",
  "Svg3DRectFromCenter",
  "Svg3DRectThreePts",
  "Svg3DSelectEdge",
  "Svg3DSelectFace",
  "Svg3DSelectPoint",
  "Svg3DSelectSolid",
  "Svg3DThreePtsBox",
  "AccessibilitySign",
  "AccessibilityTech",
  "Accessibility",
  "Activity",
  "AddCircle",
  "AddDatabaseScript",
  "AddFolder",
  "AddFrame",
  "AddHexagon",
  "AddKeyframeAlt",
  "AddKeyframe",
  "AddKeyframes",
  "AddLens",
  "AddMediaImage",
  "AddMediaVideo",
  "AddPageAlt",
  "AddPage",
  "AddPinAlt",
  "AddSelection",
  "AddSquare",
  "AddToCart",
  "AddUser",
  "AfricanTree",
  "AirConditioner",
  "AirplaneHelix45Deg",
  "AirplaneHelix",
  "AirplaneOff",
  "AirplaneRotation",
  "Airplane",
  "Airplay",
  "Alarm",
  "AlbumCarousel",
  "AlbumList",
  "AlbumOpen",
  "Album",
  "AlignBottomBox",
  "AlignCenter",
  "AlignJustify",
  "AlignLeftBox",
  "AlignLeft",
  "AlignRightBox",
  "AlignRight",
  "AlignTopBox",
  "AngleTool",
  "AntennaOff",
  "AntennaSignalTag",
  "AntennaSignal",
  "Antenna",
  "AppNotification",
  "AppWindow",
  "AppleHalfAlt",
  "AppleHalf",
  "AppleImac2021Side",
  "AppleImac2021",
  "AppleMac",
  "AppleSwift",
  "AppleWallet",
  "Apple",
  "ArSymbol",
  "Arcade",
  "ArcheryMatch",
  "Archery",
  "Archive",
  "AreaSearch",
  "ArrowArchery",
  "ArrowBlCircle",
  "ArrowBlSquare",
  "ArrowBrCircle",
  "ArrowBrSquare",
  "ArrowDownCircle",
  "ArrowDown",
  "ArrowEmailForward",
  "ArrowLeftCircle",
  "ArrowLeft",
  "ArrowRightCircle",
  "ArrowRight",
  "ArrowSeparateVertical",
  "ArrowSeparate",
  "ArrowTlCircle",
  "ArrowTlSquare",
  "ArrowTrCircle",
  "ArrowTrSquare",
  "ArrowUnionVertical",
  "ArrowUnion",
  "ArrowUpCircle",
  "ArrowUp",
  "Asana",
  "AtSignCircle",
  "AtSign",
  "Atom",
  "Attachment",
  "AugmentedReality",
  "AutoFlash",
  "AviFormat",
  "Axes",
  "Backward15Seconds",
  "Bag",
  "Bank",
  "Barcode",
  "BasketballAlt",
  "BasketballField",
  "Basketball",
  "Battery25",
  "Battery50",
  "Battery75",
  "BatteryCharging",
  "BatteryEmpty",
  "BatteryFull",
  "BatteryIndicator",
  "BatteryWarning",
  "Bbq",
  "BeachBagBig",
  "BeachBag",
  "BedReady",
  "Bed",
  "BehanceTag",
  "Behance",
  "BellNotification",
  "BellOff",
  "Bell",
  "Bicycle",
  "BinAdd",
  "BinFull",
  "BinHalf",
  "BinMinus",
  "Bin",
  "Bishop",
  "Bitbucket",
  "BluetoothTag",
  "Bluetooth",
  "BoldSquare",
  "Bold",
  "Bonfire",
  "BookStack",
  "Book",
  "BookmarkBook",
  "BookmarkCircle",
  "BookmarkEmpty",
  "BorderBl",
  "BorderBottom",
  "BorderBr",
  "BorderInner",
  "BorderLeft",
  "BorderOut",
  "BorderRight",
  "BorderTl",
  "BorderTop",
  "BorderTr",
  "BounceLeft",
  "BounceRight",
  "BowlingBall",
  "BoxIso",
  "Box",
  "BoxingGlove",
  "BrainElectricity",
  "BrainResearch",
  "BrainWarning",
  "Brain",
  "BreadSlice",
  "BrightnessWindow",
  "Brightness",
  "BubbleDownload",
  "BubbleError",
  "BubbleIncome",
  "BubbleOutcome",
  "BubbleSearch",
  "BubbleStar",
  "BubbleUpload",
  "BubbleWarning",
  "Building",
  "BusStop",
  "Bus",
  "CableTag",
  "Calculator",
  "Calendar",
  "Camera",
  "Cancel",
  "CandlestickChart",
  "Car",
  "Carbon",
  "CardIssue",
  "CardLocked",
  "CardSecurity",
  "CardWallet",
  "CartAlt",
  "Cart",
  "Cash",
  "Cell2X2",
  "CenterAlign",
  "ChatAdd",
  "ChatBubbleCheck1",
  "ChatBubbleCheck",
  "ChatBubbleEmpty",
  "ChatBubbleError",
  "ChatBubbleQuestion",
  "ChatBubbleTranslate",
  "ChatBubbleWarning",
  "ChatBubble",
  "ChatLines",
  "ChatRemove",
  "CheckCircle",
  "CheckWindow",
  "Check",
  "Chocolate",
  "ChromecastActive",
  "Chromecast",
  "ChurchAlt",
  "Church",
  "CinemaOld",
  "Circle",
  "City",
  "CleanWater",
  "ClipboardCheck",
  "Clock",
  "ClosedCaptions",
  "Closet",
  "CloudBookAlt",
  "CloudCheck",
  "CloudDesync",
  "CloudDownload",
  "CloudError",
  "CloudSunny",
  "CloudSync",
  "CloudUpload",
  "Cloud",
  "Clutery",
  "CodeBracketsSquare",
  "CodeBrackets",
  "Code",
  "Codepen",
  "CoffeeCup",
  "Coin",
  "CollageFrame",
  "Collapse",
  "ColorFilter",
  "ColorPickerEmpty",
  "ColorPicker",
  "Combine",
  "CompactDisc",
  "Compass",
  "CompressLines",
  "Compress",
  "Computer",
  "Consumable",
  "ControlSlider",
  "Cookie",
  "Cooling",
  "Copy",
  "Copyright",
  "CornerBottomLeft",
  "CornerBottomRight",
  "CornerTopLeft",
  "CornerTopRight",
  "CpuWarning",
  "Cpu",
  "CrackedEgg",
  "CreativeCommons",
  "CreditCard",
  "CreditCards",
  "Crib",
  "CropRotateBl",
  "CropRotateBr",
  "CropRotateTl",
  "CropRotateTr",
  "Crop",
  "Css3",
  "CursorPointer",
  "CutAlt",
  "Cut",
  "Cycling",
  "Cylinder",
  "DashFlag",
  "DashboardDots",
  "DashboardSpeed",
  "Dashboard",
  "DataTransferBoth",
  "DataTransferCheck",
  "DataTransferDown",
  "DataTransferUp",
  "DataTransferWarning",
  "DatabaseBackup",
  "DatabaseExport",
  "DatabaseMonitor",
  "DatabaseRestore",
  "DatabaseScript",
  "DatabaseSettings",
  "DatabaseStar",
  "DatabaseStats",
  "DatabaseTag",
  "DbCheck",
  "DbError",
  "DbSearch",
  "DbStar",
  "DbWarning",
  "Db",
  "DeCompress",
  "DeleteCircle",
  "DeliveryTruck",
  "Delivery",
  "Depth",
  "DesignNib",
  "DesignPencil",
  "Desk",
  "Dialpad",
  "Diameter",
  "DiceFive",
  "DiceFour",
  "DiceOne",
  "DiceSix",
  "DiceThree",
  "DiceTwo",
  "DimmerSwitch",
  "DirectorChair",
  "Discord",
  "Dishwasher",
  "Display4K",
  "DivideSelection1",
  "DivideSelection2",
  "DivideThree",
  "Divide",
  "Dna",
  "DocSearchAlt",
  "DocSearch",
  "DocStarAlt",
  "DocStar",
  "Dollar",
  "DomoticIssue",
  "Donate",
  "DoubleCheck",
  "DownRoundArrow",
  "DownloadCircle",
  "DownloadDataWindow",
  "DownloadSquare",
  "Download",
  "DragHandGesture",
  "Drag",
  "Drawer",
  "Dribbble",
  "DroneChargeFull",
  "DroneChargeHalf",
  "DroneChargeLow",
  "DroneCheck",
  "DroneError",
  "DroneLanding",
  "DroneRefresh",
  "DroneTakeOff",
  "Drone",
  "DropletHalf",
  "Droplet",
  "EaseCurveControlPoints",
  "EaseInControlPoint",
  "EaseInOut",
  "EaseIn",
  "EaseOutControlPoint",
  "EaseOut",
  "EcologyBook",
  "EditPencil",
  "Edit",
  "Egg",
  "Eject",
  "ElectronicsChip",
  "ElectronicsTransistor",
  "EmojiBall",
  "EmojiBlinkLeft",
  "EmojiBlinkRight",
  "EmojiLookDown",
  "EmojiLookLeft",
  "EmojiLookRight",
  "EmojiLookUp",
  "EmojiPuzzled",
  "EmojiQuite",
  "EmojiReally",
  "EmojiSad",
  "EmojiSatisfied",
  "EmojiSingLeftNote",
  "EmojiSingLeft",
  "EmojiSingRightNote",
  "EmojiSingRight",
  "EmojiSurpriseAlt",
  "EmojiSurprise",
  "EmojiTalkingAngry",
  "EmojiTalkingHappy",
  "EmojiThinkLeft",
  "EmojiThinkRight",
  "Emoji",
  "EmptyPage",
  "EnergyUsageWindow",
  "EnlargeRoundArrow",
  "Enlarge",
  "Erase",
  "ErrorWindow",
  "EuroSquare",
  "Euro",
  "EvChargeAlt",
  "EvCharge",
  "EvPlugCharging",
  "EvPlugError",
  "EvPlug",
  "EvStation",
  "EvTag",
  "Exclude",
  "ExpandLines",
  "Expand",
  "EyeAlt",
  "EyeClose",
  "EyeEmpty",
  "EyeOff",
  "FaceId",
  "FacebookTag",
  "Facebook",
  "Facetime",
  "Farm",
  "FastArrowDownBox",
  "FastArrowDown",
  "FastArrowLeftBox",
  "FastArrowLeft",
  "FastArrowRightBox",
  "FastArrowRight",
  "FastArrowUpBox",
  "FastArrowUp",
  "FastDownCircle",
  "FastLeftCircle",
  "FastRightCircle",
  "FastUpCircle",
  "FavouriteBook",
  "FavouriteWindow",
  "Female",
  "Figma",
  "FileNotFound",
  "FilterAlt",
  "Filter",
  "Finder",
  "FingerprintCheckCircle",
  "FingerprintCircle",
  "FingerprintErrorCircle",
  "FingerprintLockCircle",
  "FingerprintPhone",
  "FingerprintScan",
  "FingerprintSquare",
  "FingerprintWindow",
  "Fingerprint",
  "FireFlame",
  "Fishing",
  "Flare",
  "FlashOff",
  "Flash",
  "Flask",
  "FlipReverse",
  "Flip",
  "Flower",
  "Fluorine",
  "Fog",
  "FolderAlert",
  "FolderSettings",
  "Folder",
  "FontSize",
  "FootballBall",
  "Football",
  "Forward15Seconds",
  "ForwardMessage",
  "Forward",
  "FrameAltEmpty",
  "FrameAlt",
  "FrameSelect",
  "FrameSimple",
  "FrameTool",
  "Frame",
  "Fridge",
  "FxTag",
  "Fx",
  "Gamepad",
  "Garage",
  "GasTankDrop",
  "GasTank",
  "Gas",
  "GifFormat",
  "Gift",
  "GitBranch",
  "GitCommand",
  "GitCommit",
  "GitCompare",
  "GitFork",
  "GitMerge",
  "GitPullRequest",
  "GitHub",
  "GitLabFull",
  "GithubCircle",
  "GlassEmpty",
  "GlassHalfAlt",
  "GlassHalf",
  "Glasses",
  "Globe",
  "Golf",
  "GoogleCircle",
  "GoogleDocs",
  "GoogleDriveCheck",
  "GoogleDriveSync",
  "GoogleDriveWarning",
  "GoogleDrive",
  "GoogleHome",
  "GoogleOne",
  "Google",
  "Gps",
  "GraduationCap",
  "GraphDown",
  "GraphUp",
  "GreenBus",
  "GreenTruck",
  "GreenVehicle",
  "GridAdd",
  "GridMinus",
  "GridRemove",
  "Group",
  "Gym",
  "HalfCookie",
  "HalfMoon",
  "Hammer",
  "HandBrake",
  "Handbag",
  "HardDrive",
  "Hat",
  "HdDisplay",
  "Hd",
  "Hdr",
  "HeadsetCharge",
  "HeadsetHelp",
  "HeadsetIssue",
  "Headset",
  "HealthShield",
  "Healthcare",
  "Heart",
  "Heating",
  "HeavyRain",
  "HelpCircle",
  "HelpSquare",
  "Heptagon",
  "HerSlips",
  "HexagonAlt",
  "HexagonDice",
  "Hexagon",
  "HighPriority",
  "HistoricShieldAlt",
  "HistoricShield",
  "HomeAltSlimHoriz",
  "HomeAltSlim",
  "HomeAlt",
  "HomeHospital",
  "HomeSale",
  "HomeSecure",
  "HomeShield",
  "HomeSimpleDoor",
  "HomeSimple",
  "HomeTable",
  "HomeUser",
  "Home",
  "HorizDistributionLeft",
  "HorizDistributionRight",
  "HorizontalMerge",
  "HorizontalSplit",
  "HospitalSign",
  "Hospital",
  "HotAirBalloon",
  "Hourglass",
  "Html5",
  "Hydrogen",
  "Iconoir",
  "Import",
  "Inclination",
  "Industry",
  "Infinite",
  "InfoEmpty",
  "InputField",
  "InputOutput",
  "InputSearch",
  "Instagram",
  "Internet",
  "IntersectAlt",
  "Intersect",
  "IosSettings",
  "IpAddress",
  "IrisScan",
  "ItalicSquare",
  "Italic",
  "JournalPage",
  "Journal",
  "JpegFormat",
  "JpgFormat",
  "KanbanBoard",
  "KeyAltBack",
  "KeyAltMinus",
  "KeyAltPlus",
  "KeyAltRemove",
  "KeyAlt",
  "KeyframeAlignCenter",
  "KeyframeAlignHorizontal",
  "KeyframeAlignVertical",
  "KeyframePosition",
  "Keyframe",
  "KeyframesCouple",
  "Keyframes",
  "Label",
  "Lamp",
  "Language",
  "LaptopCharging",
  "LaptopFix",
  "LaptopIssue",
  "Laptop",
  "LargeSuitcase",
  "LayoutLeft",
  "LayoutRight",
  "LeaderboardStar",
  "Leaderboard",
  "Leaf",
  "LeftRoundArrow",
  "Lens",
  "Lifebelt",
  "LightBulbOff",
  "LightBulbOn",
  "LightBulb",
  "LineSpace",
  "Linear",
  "Link",
  "LinkedIn",
  "Linux",
  "ListSelect",
  "List",
  "LoadActionFloppy",
  "LockKey",
  "Lock",
  "LockedBook",
  "LockedWindow",
  "LogDenied",
  "LogIn",
  "LogOut",
  "LongArrowDownLeft",
  "LongArrowDownRight",
  "LongArrowLeftDown",
  "LongArrowLeftUp",
  "LongArrowRightDown",
  "LongArrowRightUp1",
  "LongArrowRightUp",
  "LongArrowUpLeft",
  "LongArrowUpRight",
  "LotOfCash",
  "MacControlKey",
  "MacDock",
  "MacOptionKey",
  "MacOsWindow",
  "MagnetEnergy",
  "Magnet",
  "MailIn",
  "MailOpened",
  "MailOut",
  "Mail",
  "Male",
  "MapIssue",
  "Map",
  "MapsArrowDiagonal",
  "MapsArrowIssue",
  "MapsArrow",
  "MapsGoStraight",
  "MapsTurnBack",
  "MapsTurnLeft",
  "MapsTurnRight",
  "MaskSquare",
  "MastercardCard",
  "MathBook",
  "Maximize",
  "Medal1St",
  "Medal",
  "MediaImageFolder",
  "MediaImageList",
  "MediaImage",
  "MediaVideoFolder",
  "MediaVideoList",
  "MediaVideo",
  "Medium",
  "Megaphone",
  "MenuScale",
  "Menu",
  "MessageAlert",
  "MessageText",
  "Message",
  "Metro",
  "MicAdd",
  "MicCheck",
  "MicMute",
  "MicRemove",
  "MicSpeaking",
  "MicWarning",
  "Mic",
  "Microscope",
  "Minus1",
  "MinusCircle",
  "MinusHexagon",
  "MinusPinAlt",
  "MinusSquare",
  "Minus",
  "Mirror",
  "MissingFont",
  "ModernTv4K",
  "ModernTv",
  "MoneySquare",
  "MoonSat",
  "MoreHorizCircle",
  "MoreHoriz",
  "MoreVertCircle",
  "MoreVert",
  "Motorcycle",
  "MouseButtonLeft",
  "MouseButtonRight",
  "MouseScrollWheel",
  "MoveDown",
  "MoveLeft",
  "MoveRight",
  "MoveRuler",
  "MoveUp",
  "Movie",
  "MpegFormat",
  "MultiBubble",
  "MultiMacOsWindow",
  "MultiWindow",
  "MultiplePagesAdd",
  "MultiplePagesDelete",
  "MultiplePagesEmpty",
  "MultiplePagesRemove",
  "MultiplePages",
  "MusicDoubleNoteAdd",
  "MusicDoubleNote",
  "MusicNoteAdd",
  "MusicNote",
  "NavArrowDown",
  "NavArrowLeft",
  "NavArrowRight",
  "NavArrowUp",
  "NavigatorAlt",
  "Navigator",
  "NetworkAlt",
  "NetworkLeft",
  "NetworkRight",
  "Network",
  "NewTab",
  "NintendoSwitch",
  "Nitrogen",
  "NoAccessWindow",
  "NoBattery",
  "NoCoin",
  "NoCreditCard",
  "NoLink",
  "NoLock",
  "NoSmokingCircle",
  "NoSmoking",
  "Notes",
  "NpmSquare",
  "Npm",
  "NumberedListLeft",
  "NumberedListRight",
  "Octagon",
  "OffTag",
  "OilIndustry",
  "OnTag",
  "OneFingerSelectHandGesture",
  "OnePointCircle",
  "OpenBook",
  "OpenInBrowser",
  "OpenInWindow",
  "OpenNewWindow",
  "OpenSelectHandGesture",
  "OpenVpn",
  "OrangeHalf",
  "OrangeSliceAlt",
  "OrangeSlice",
  "OrganicFoodSquare",
  "OrganicFood",
  "OrthogonalView",
  "Oxygen",
  "PackageLock",
  "Package",
  "Packages",
  "Pacman",
  "PageDown",
  "PageEdit",
  "PageFlip",
  "PageLeft",
  "PageRight",
  "PageSearch",
  "PageStar",
  "PageUp",
  "Page",
  "Palette",
  "PanoramaEnlarge",
  "PanoramaReduce",
  "PantsAlt",
  "Pants",
  "Parking",
  "PasswordCursor",
  "PasswordError",
  "PasswordPass",
  "PasteClipboard",
  "PathArrow",
  "PauseWindow",
  "Pause",
  "Paypal",
  "PcCheck",
  "PcFirewall",
  "PcMouse",
  "PcNoEntry",
  "PcWarning",
  "PeaceHand",
  "PenConnectBluetooth",
  "PenConnectWifi",
  "PenTabletConnectUsb",
  "PenTabletConnectWifi",
  "PenTablet",
  "Pentagon",
  "PeopleTag",
  "PercentageCircle",
  "PercentageSquare",
  "Percentage",
  "PerspectiveView",
  "PharmacyCrossCircle",
  "PharmacyCrossSquare",
  "PhoneAdd",
  "PhoneDelete",
  "PhoneDisabled",
  "PhoneIncome",
  "PhoneOutcome",
  "PhonePaused",
  "PhoneRemove",
  "Phone",
  "PiggyBank",
  "Pillow",
  "PinAlt",
  "Pin",
  "PineTree",
  "Pinterest",
  "PizzaSlice",
  "PlanetAlt",
  "PlanetSat",
  "Planet",
  "Play",
  "PlaylistAdd",
  "PlaylistPlay",
  "Playlist",
  "PlaystationGamepad",
  "PlugTypeA",
  "PlugTypeC",
  "PlugTypeG",
  "PlugTypeL",
  "Plus",
  "PngFormat",
  "Pocket",
  "Podcast",
  "Pokeball",
  "PositionAlign",
  "Position",
  "Potion",
  "Pound",
  "PrecisionTool",
  "PrinterAlt",
  "Printer",
  "PrintingPage",
  "PriorityDown",
  "PriorityUp",
  "PrivateWifi",
  "ProfileCircle",
  "Prohibition",
  "Puzzle",
  "QrCode",
  "QuestionMark",
  "QuoteMessage",
  "Quote",
  "Radiation",
  "Radius",
  "Rain",
  "RawFormat",
  "ReceiveDollars",
  "ReceiveEuros",
  "ReceivePounds",
  "ReceiveYens",
  "RedoAction",
  "RedoCircle",
  "Redo",
  "ReduceRoundArrow",
  "Reduce",
  "RefreshCircular",
  "RefreshDouble",
  "Refresh",
  "ReloadWindow",
  "ReminderHandGesture",
  "RemoveDatabaseScript",
  "RemoveFolder",
  "RemoveFrame",
  "RemoveFromCart",
  "RemoveKeyframeAlt",
  "RemoveKeyframe",
  "RemoveKeyframes",
  "RemoveLink",
  "RemoveMediaImage",
  "RemoveMediaVideo",
  "RemovePageAlt",
  "RemovePage",
  "RemovePinAlt",
  "RemovePin",
  "RemoveSelection",
  "RemoveSquare",
  "RemoveUser",
  "RepeatOnce",
  "Repeat",
  "ReplyToMessage",
  "Reply",
  "ReportColumns",
  "Reports",
  "Repository",
  "Restart",
  "Rewind",
  "Rhombus",
  "RightRoundArrow",
  "Rings",
  "Rocket",
  "Rook",
  "RotateCameraLeft",
  "RotateCameraRight",
  "RoundFlask",
  "RoundedMirror",
  "RssFeedTag",
  "RssFeed",
  "RubikCube",
  "RulerAdd",
  "RulerCombine",
  "RulerRemove",
  "Ruler",
  "Running",
  "Safari",
  "Sandals",
  "SaveActionFloppy",
  "SaveFloppyDisk",
  "ScaleFrameEnlarge",
  "ScaleFrameReduce",
  "ScanBarcode",
  "ScanQrCode",
  "Scanning",
  "Scarf",
  "ScissorAlt",
  "Scissor",
  "Screenshot",
  "SeaAndSun",
  "SeaWaves",
  "SearchEngine",
  "SearchFont",
  "SearchWindow",
  "Search",
  "SecureWindow",
  "SecurityPass",
  "SelectWindow",
  "Selection",
  "SelectiveTool",
  "SendDiagonal",
  "SendDollars",
  "SendEuros",
  "SendMail",
  "SendPounds",
  "SendYens",
  "Send",
  "ServerConnection",
  "Server",
  "SettingsCloud",
  "SettingsProfiles",
  "Settings",
  "ShareAndroid",
  "ShareIos",
  "ShieldAdd",
  "ShieldAlert",
  "ShieldAlt",
  "ShieldBroken",
  "ShieldCheck",
  "ShieldCross",
  "ShieldDownload",
  "ShieldEye",
  "ShieldLoading",
  "ShieldMinus",
  "ShieldQuestion",
  "ShieldSearch",
  "ShieldUpload",
  "Shield",
  "ShopAlt",
  "Shop",
  "ShoppingBagAdd",
  "ShoppingBagAlt",
  "ShoppingBagArrowDown",
  "ShoppingBagArrowUp",
  "ShoppingBagCheck",
  "ShoppingBagIssue",
  "ShoppingBagRemove",
  "ShoppingBag",
  "ShoppingCodeCheck",
  "ShoppingCodeError",
  "ShoppingCode",
  "ShortPantsAlt",
  "ShortPants",
  "Shortcut",
  "Shuffle",
  "SidebarCollapse",
  "SidebarExpand",
  "SigmaFunction",
  "SimpleCart",
  "SingleTapGesture",
  "Skateboard",
  "Skateboarding",
  "SkipNext",
  "SkipPrev",
  "SleeperChair",
  "SmallLampAlt",
  "SmallLamp",
  "SmallShopAlt",
  "SmallShop",
  "SmartphoneDevice",
  "Smoking",
  "Snapchat",
  "SnowFlake",
  "Snow",
  "Soap",
  "SoccerBall",
  "Sofa",
  "SoilAlt",
  "Soil",
  "SortDown",
  "SortUp",
  "Sort",
  "SoundHigh",
  "SoundLow",
  "SoundMin",
  "SoundOff",
  "Spades",
  "Sphere",
  "Spiral",
  "SpockHandGesture",
  "Square",
  "Stackoverflow",
  "StarDashed",
  "StarHalfDashed",
  "Star",
  "StatDown",
  "StatUp",
  "StatsDownSquare",
  "StatsReport",
  "StatsUpSquare",
  "Stretching",
  "Stroller",
  "StyleBorder",
  "SubmitDocument",
  "Substract",
  "Suggestion",
  "SunLight",
  "SvgFormat",
  "Swimming",
  "SwipeDownGesture",
  "SwipeLeftGesture",
  "SwipeRightGesture",
  "SwipeTwoFingersDownGesture",
  "SwipeTwoFingersLeftGesture",
  "SwipeTwoFingersRightGesture",
  "SwipeTwoFingersUpGesture",
  "SwipeUpGesture",
  "SwitchOff",
  "SwitchOn",
  "SystemRestart",
  "SystemShut",
  "Table2Columns",
  "TableRows",
  "Table",
  "TaskList",
  "TelegramCircle",
  "Telegram",
  "TennisBallAlt",
  "TennisBall",
  "TerminalTag",
  "Terminal",
  "TestTube",
  "TextAlt",
  "TextBox",
  "TextSize",
  "Text",
  "ThreePointsCircle",
  "ThreeStars",
  "ThumbsDown",
  "ThumbsUp",
  "Thunderstorm",
  "TifFormat",
  "TiffFormat",
  "TikTok",
  "TimerOff",
  "Timer",
  "Tools",
  "Tournament",
  "TowerCheck",
  "TowerNoAccess",
  "TowerWarning",
  "Tower",
  "Trademark",
  "Train",
  "Tram",
  "TransitionDown",
  "TransitionLeft",
  "TransitionRight",
  "TransitionUp",
  "Translate",
  "Trash",
  "Treadmill",
  "Tree",
  "Trekking",
  "Trello",
  "TriangleFlagCircle",
  "TriangleFlagTwoStripes",
  "TriangleFlag",
  "Triangle",
  "Trophy",
  "TruckLength",
  "Truck",
  "Tunnel",
  "TvFix",
  "TvIssue",
  "Tv",
  "TwitterVerifiedBadge",
  "Twitter",
  "TwoPointsCircle",
  "TwoSeaterSofa",
  "Type",
  "UmbrellaFull",
  "UnderlineSquare",
  "Underline",
  "UndoAction",
  "UndoCircle",
  "Undo",
  "UnionAlt",
  "UnionHorizAlt",
  "Union",
  "Unity5",
  "Unity",
  "UpRoundArrow",
  "UploadDataWindow",
  "UploadSquare",
  "Upload",
  "Usb",
  "UserBag",
  "UserCart",
  "UserCircle",
  "UserScan",
  "UserSquare",
  "User",
  "VeganCircle",
  "VeganSquare",
  "Vegan",
  "VerifiedBadge",
  "VerifiedUser",
  "VerticalMerge",
  "VerticalSplit",
  "Vials",
  "VideoCameraOff",
  "VideoCamera",
  "ViewColumns2",
  "ViewColumns3",
  "ViewGrid",
  "ViewStructureDown",
  "ViewStructureUp",
  "View360",
  "VoiceCircle",
  "VoiceError",
  "VoiceLockCircle",
  "VoiceOk",
  "VoicePhone",
  "VoiceScan",
  "VoiceSquare",
  "Voice",
  "VrSymbol",
  "Waist",
  "Walking",
  "Wallet",
  "WarningCircle",
  "WarningHexagon",
  "WarningSquare",
  "WarningTriangle",
  "WarningWindow",
  "Wash",
  "WashingMachine",
  "WateringSoil",
  "WebWindowClose",
  "WebWindowEnergyConsumption",
  "WebWindow",
  "WebpFormat",
  "WeightAlt",
  "Weight",
  "WhiteFlag",
  "WifiError",
  "WifiIssue",
  "WifiOff",
  "WifiSignalNone",
  "WifiTag",
  "Wifi",
  "Wind",
  "Windows",
  "WrapText",
  "Wrench",
  "Wristwatch",
  "Www",
  "XCoordinate",
  "XboxA",
  "XboxB",
  "XboxX",
  "XboxY",
  "XrayView",
  "YCoordinate",
  "YenSquare",
  "Yen",
  "Yoga",
  "YouTube",
  "ZCoordinate",
  "ZoomIn",
  "ZoomOut",
];

type IconName =
  | "Svg3DAddHole"
  | "Svg3DArcCenterPt"
  | "Svg3DArc"
  | "Svg3DBridge"
  | "Svg3DCenterBox"
  | "Svg3DEllipseThreePts"
  | "Svg3DEllipse"
  | "Svg3DPtBox"
  | "Svg3DRectCornerToCorner"
  | "Svg3DRectFromCenter"
  | "Svg3DRectThreePts"
  | "Svg3DSelectEdge"
  | "Svg3DSelectFace"
  | "Svg3DSelectPoint"
  | "Svg3DSelectSolid"
  | "Svg3DThreePtsBox"
  | "AccessibilitySign"
  | "AccessibilityTech"
  | "Accessibility"
  | "Activity"
  | "AddCircle"
  | "AddDatabaseScript"
  | "AddFolder"
  | "AddFrame"
  | "AddHexagon"
  | "AddKeyframeAlt"
  | "AddKeyframe"
  | "AddKeyframes"
  | "AddLens"
  | "AddMediaImage"
  | "AddMediaVideo"
  | "AddPageAlt"
  | "AddPage"
  | "AddPinAlt"
  | "AddSelection"
  | "AddSquare"
  | "AddToCart"
  | "AddUser"
  | "AfricanTree"
  | "AirConditioner"
  | "AirplaneHelix45Deg"
  | "AirplaneHelix"
  | "AirplaneOff"
  | "AirplaneRotation"
  | "Airplane"
  | "Airplay"
  | "Alarm"
  | "AlbumCarousel"
  | "AlbumList"
  | "AlbumOpen"
  | "Album"
  | "AlignBottomBox"
  | "AlignCenter"
  | "AlignJustify"
  | "AlignLeftBox"
  | "AlignLeft"
  | "AlignRightBox"
  | "AlignRight"
  | "AlignTopBox"
  | "AngleTool"
  | "AntennaOff"
  | "AntennaSignalTag"
  | "AntennaSignal"
  | "Antenna"
  | "AppNotification"
  | "AppWindow"
  | "AppleHalfAlt"
  | "AppleHalf"
  | "AppleImac2021Side"
  | "AppleImac2021"
  | "AppleMac"
  | "AppleSwift"
  | "AppleWallet"
  | "Apple"
  | "ArSymbol"
  | "Arcade"
  | "ArcheryMatch"
  | "Archery"
  | "Archive"
  | "AreaSearch"
  | "ArrowArchery"
  | "ArrowBlCircle"
  | "ArrowBlSquare"
  | "ArrowBrCircle"
  | "ArrowBrSquare"
  | "ArrowDownCircle"
  | "ArrowDown"
  | "ArrowEmailForward"
  | "ArrowLeftCircle"
  | "ArrowLeft"
  | "ArrowRightCircle"
  | "ArrowRight"
  | "ArrowSeparateVertical"
  | "ArrowSeparate"
  | "ArrowTlCircle"
  | "ArrowTlSquare"
  | "ArrowTrCircle"
  | "ArrowTrSquare"
  | "ArrowUnionVertical"
  | "ArrowUnion"
  | "ArrowUpCircle"
  | "ArrowUp"
  | "Asana"
  | "AtSignCircle"
  | "AtSign"
  | "Atom"
  | "Attachment"
  | "AugmentedReality"
  | "AutoFlash"
  | "AviFormat"
  | "Axes"
  | "Backward15Seconds"
  | "Bag"
  | "Bank"
  | "Barcode"
  | "BasketballAlt"
  | "BasketballField"
  | "Basketball"
  | "Battery25"
  | "Battery50"
  | "Battery75"
  | "BatteryCharging"
  | "BatteryEmpty"
  | "BatteryFull"
  | "BatteryIndicator"
  | "BatteryWarning"
  | "Bbq"
  | "BeachBagBig"
  | "BeachBag"
  | "BedReady"
  | "Bed"
  | "BehanceTag"
  | "Behance"
  | "BellNotification"
  | "BellOff"
  | "Bell"
  | "Bicycle"
  | "BinAdd"
  | "BinFull"
  | "BinHalf"
  | "BinMinus"
  | "Bin"
  | "Bishop"
  | "Bitbucket"
  | "BluetoothTag"
  | "Bluetooth"
  | "BoldSquare"
  | "Bold"
  | "Bonfire"
  | "BookStack"
  | "Book"
  | "BookmarkBook"
  | "BookmarkCircle"
  | "BookmarkEmpty"
  | "BorderBl"
  | "BorderBottom"
  | "BorderBr"
  | "BorderInner"
  | "BorderLeft"
  | "BorderOut"
  | "BorderRight"
  | "BorderTl"
  | "BorderTop"
  | "BorderTr"
  | "BounceLeft"
  | "BounceRight"
  | "BowlingBall"
  | "BoxIso"
  | "Box"
  | "BoxingGlove"
  | "BrainElectricity"
  | "BrainResearch"
  | "BrainWarning"
  | "Brain"
  | "BreadSlice"
  | "BrightnessWindow"
  | "Brightness"
  | "BubbleDownload"
  | "BubbleError"
  | "BubbleIncome"
  | "BubbleOutcome"
  | "BubbleSearch"
  | "BubbleStar"
  | "BubbleUpload"
  | "BubbleWarning"
  | "Building"
  | "BusStop"
  | "Bus"
  | "CableTag"
  | "Calculator"
  | "Calendar"
  | "Camera"
  | "Cancel"
  | "CandlestickChart"
  | "Car"
  | "Carbon"
  | "CardIssue"
  | "CardLocked"
  | "CardSecurity"
  | "CardWallet"
  | "CartAlt"
  | "Cart"
  | "Cash"
  | "Cell2X2"
  | "CenterAlign"
  | "ChatAdd"
  | "ChatBubbleCheck1"
  | "ChatBubbleCheck"
  | "ChatBubbleEmpty"
  | "ChatBubbleError"
  | "ChatBubbleQuestion"
  | "ChatBubbleTranslate"
  | "ChatBubbleWarning"
  | "ChatBubble"
  | "ChatLines"
  | "ChatRemove"
  | "CheckCircle"
  | "CheckWindow"
  | "Check"
  | "Chocolate"
  | "ChromecastActive"
  | "Chromecast"
  | "ChurchAlt"
  | "Church"
  | "CinemaOld"
  | "Circle"
  | "City"
  | "CleanWater"
  | "ClipboardCheck"
  | "Clock"
  | "ClosedCaptions"
  | "Closet"
  | "CloudBookAlt"
  | "CloudCheck"
  | "CloudDesync"
  | "CloudDownload"
  | "CloudError"
  | "CloudSunny"
  | "CloudSync"
  | "CloudUpload"
  | "Cloud"
  | "Clutery"
  | "CodeBracketsSquare"
  | "CodeBrackets"
  | "Code"
  | "Codepen"
  | "CoffeeCup"
  | "Coin"
  | "CollageFrame"
  | "Collapse"
  | "ColorFilter"
  | "ColorPickerEmpty"
  | "ColorPicker"
  | "Combine"
  | "CompactDisc"
  | "Compass"
  | "CompressLines"
  | "Compress"
  | "Computer"
  | "Consumable"
  | "ControlSlider"
  | "Cookie"
  | "Cooling"
  | "Copy"
  | "Copyright"
  | "CornerBottomLeft"
  | "CornerBottomRight"
  | "CornerTopLeft"
  | "CornerTopRight"
  | "CpuWarning"
  | "Cpu"
  | "CrackedEgg"
  | "CreativeCommons"
  | "CreditCard"
  | "CreditCards"
  | "Crib"
  | "CropRotateBl"
  | "CropRotateBr"
  | "CropRotateTl"
  | "CropRotateTr"
  | "Crop"
  | "Css3"
  | "CursorPointer"
  | "CutAlt"
  | "Cut"
  | "Cycling"
  | "Cylinder"
  | "DashFlag"
  | "DashboardDots"
  | "DashboardSpeed"
  | "Dashboard"
  | "DataTransferBoth"
  | "DataTransferCheck"
  | "DataTransferDown"
  | "DataTransferUp"
  | "DataTransferWarning"
  | "DatabaseBackup"
  | "DatabaseExport"
  | "DatabaseMonitor"
  | "DatabaseRestore"
  | "DatabaseScript"
  | "DatabaseSettings"
  | "DatabaseStar"
  | "DatabaseStats"
  | "DatabaseTag"
  | "DbCheck"
  | "DbError"
  | "DbSearch"
  | "DbStar"
  | "DbWarning"
  | "Db"
  | "DeCompress"
  | "DeleteCircle"
  | "DeliveryTruck"
  | "Delivery"
  | "Depth"
  | "DesignNib"
  | "DesignPencil"
  | "Desk"
  | "Dialpad"
  | "Diameter"
  | "DiceFive"
  | "DiceFour"
  | "DiceOne"
  | "DiceSix"
  | "DiceThree"
  | "DiceTwo"
  | "DimmerSwitch"
  | "DirectorChair"
  | "Discord"
  | "Dishwasher"
  | "Display4K"
  | "DivideSelection1"
  | "DivideSelection2"
  | "DivideThree"
  | "Divide"
  | "Dna"
  | "DocSearchAlt"
  | "DocSearch"
  | "DocStarAlt"
  | "DocStar"
  | "Dollar"
  | "DomoticIssue"
  | "Donate"
  | "DoubleCheck"
  | "DownRoundArrow"
  | "DownloadCircle"
  | "DownloadDataWindow"
  | "DownloadSquare"
  | "Download"
  | "DragHandGesture"
  | "Drag"
  | "Drawer"
  | "Dribbble"
  | "DroneChargeFull"
  | "DroneChargeHalf"
  | "DroneChargeLow"
  | "DroneCheck"
  | "DroneError"
  | "DroneLanding"
  | "DroneRefresh"
  | "DroneTakeOff"
  | "Drone"
  | "DropletHalf"
  | "Droplet"
  | "EaseCurveControlPoints"
  | "EaseInControlPoint"
  | "EaseInOut"
  | "EaseIn"
  | "EaseOutControlPoint"
  | "EaseOut"
  | "EcologyBook"
  | "EditPencil"
  | "Edit"
  | "Egg"
  | "Eject"
  | "ElectronicsChip"
  | "ElectronicsTransistor"
  | "EmojiBall"
  | "EmojiBlinkLeft"
  | "EmojiBlinkRight"
  | "EmojiLookDown"
  | "EmojiLookLeft"
  | "EmojiLookRight"
  | "EmojiLookUp"
  | "EmojiPuzzled"
  | "EmojiQuite"
  | "EmojiReally"
  | "EmojiSad"
  | "EmojiSatisfied"
  | "EmojiSingLeftNote"
  | "EmojiSingLeft"
  | "EmojiSingRightNote"
  | "EmojiSingRight"
  | "EmojiSurpriseAlt"
  | "EmojiSurprise"
  | "EmojiTalkingAngry"
  | "EmojiTalkingHappy"
  | "EmojiThinkLeft"
  | "EmojiThinkRight"
  | "Emoji"
  | "EmptyPage"
  | "EnergyUsageWindow"
  | "EnlargeRoundArrow"
  | "Enlarge"
  | "Erase"
  | "ErrorWindow"
  | "EuroSquare"
  | "Euro"
  | "EvChargeAlt"
  | "EvCharge"
  | "EvPlugCharging"
  | "EvPlugError"
  | "EvPlug"
  | "EvStation"
  | "EvTag"
  | "Exclude"
  | "ExpandLines"
  | "Expand"
  | "EyeAlt"
  | "EyeClose"
  | "EyeEmpty"
  | "EyeOff"
  | "FaceId"
  | "FacebookTag"
  | "Facebook"
  | "Facetime"
  | "Farm"
  | "FastArrowDownBox"
  | "FastArrowDown"
  | "FastArrowLeftBox"
  | "FastArrowLeft"
  | "FastArrowRightBox"
  | "FastArrowRight"
  | "FastArrowUpBox"
  | "FastArrowUp"
  | "FastDownCircle"
  | "FastLeftCircle"
  | "FastRightCircle"
  | "FastUpCircle"
  | "FavouriteBook"
  | "FavouriteWindow"
  | "Female"
  | "Figma"
  | "FileNotFound"
  | "FilterAlt"
  | "Filter"
  | "Finder"
  | "FingerprintCheckCircle"
  | "FingerprintCircle"
  | "FingerprintErrorCircle"
  | "FingerprintLockCircle"
  | "FingerprintPhone"
  | "FingerprintScan"
  | "FingerprintSquare"
  | "FingerprintWindow"
  | "Fingerprint"
  | "FireFlame"
  | "Fishing"
  | "Flare"
  | "FlashOff"
  | "Flash"
  | "Flask"
  | "FlipReverse"
  | "Flip"
  | "Flower"
  | "Fluorine"
  | "Fog"
  | "FolderAlert"
  | "FolderSettings"
  | "Folder"
  | "FontSize"
  | "FootballBall"
  | "Football"
  | "Forward15Seconds"
  | "ForwardMessage"
  | "Forward"
  | "FrameAltEmpty"
  | "FrameAlt"
  | "FrameSelect"
  | "FrameSimple"
  | "FrameTool"
  | "Frame"
  | "Fridge"
  | "FxTag"
  | "Fx"
  | "Gamepad"
  | "Garage"
  | "GasTankDrop"
  | "GasTank"
  | "Gas"
  | "GifFormat"
  | "Gift"
  | "GitBranch"
  | "GitCommand"
  | "GitCommit"
  | "GitCompare"
  | "GitFork"
  | "GitMerge"
  | "GitPullRequest"
  | "GitHub"
  | "GitLabFull"
  | "GithubCircle"
  | "GlassEmpty"
  | "GlassHalfAlt"
  | "GlassHalf"
  | "Glasses"
  | "Globe"
  | "Golf"
  | "GoogleCircle"
  | "GoogleDocs"
  | "GoogleDriveCheck"
  | "GoogleDriveSync"
  | "GoogleDriveWarning"
  | "GoogleDrive"
  | "GoogleHome"
  | "GoogleOne"
  | "Google"
  | "Gps"
  | "GraduationCap"
  | "GraphDown"
  | "GraphUp"
  | "GreenBus"
  | "GreenTruck"
  | "GreenVehicle"
  | "GridAdd"
  | "GridMinus"
  | "GridRemove"
  | "Group"
  | "Gym"
  | "HalfCookie"
  | "HalfMoon"
  | "Hammer"
  | "HandBrake"
  | "Handbag"
  | "HardDrive"
  | "Hat"
  | "HdDisplay"
  | "Hd"
  | "Hdr"
  | "HeadsetCharge"
  | "HeadsetHelp"
  | "HeadsetIssue"
  | "Headset"
  | "HealthShield"
  | "Healthcare"
  | "Heart"
  | "Heating"
  | "HeavyRain"
  | "HelpCircle"
  | "HelpSquare"
  | "Heptagon"
  | "HerSlips"
  | "HexagonAlt"
  | "HexagonDice"
  | "Hexagon"
  | "HighPriority"
  | "HistoricShieldAlt"
  | "HistoricShield"
  | "HomeAltSlimHoriz"
  | "HomeAltSlim"
  | "HomeAlt"
  | "HomeHospital"
  | "HomeSale"
  | "HomeSecure"
  | "HomeShield"
  | "HomeSimpleDoor"
  | "HomeSimple"
  | "HomeTable"
  | "HomeUser"
  | "Home"
  | "HorizDistributionLeft"
  | "HorizDistributionRight"
  | "HorizontalMerge"
  | "HorizontalSplit"
  | "HospitalSign"
  | "Hospital"
  | "HotAirBalloon"
  | "Hourglass"
  | "Html5"
  | "Hydrogen"
  | "Iconoir"
  | "Import"
  | "Inclination"
  | "Industry"
  | "Infinite"
  | "InfoEmpty"
  | "InputField"
  | "InputOutput"
  | "InputSearch"
  | "Instagram"
  | "Internet"
  | "IntersectAlt"
  | "Intersect"
  | "IosSettings"
  | "IpAddress"
  | "IrisScan"
  | "ItalicSquare"
  | "Italic"
  | "JournalPage"
  | "Journal"
  | "JpegFormat"
  | "JpgFormat"
  | "KanbanBoard"
  | "KeyAltBack"
  | "KeyAltMinus"
  | "KeyAltPlus"
  | "KeyAltRemove"
  | "KeyAlt"
  | "KeyframeAlignCenter"
  | "KeyframeAlignHorizontal"
  | "KeyframeAlignVertical"
  | "KeyframePosition"
  | "Keyframe"
  | "KeyframesCouple"
  | "Keyframes"
  | "Label"
  | "Lamp"
  | "Language"
  | "LaptopCharging"
  | "LaptopFix"
  | "LaptopIssue"
  | "Laptop"
  | "LargeSuitcase"
  | "LayoutLeft"
  | "LayoutRight"
  | "LeaderboardStar"
  | "Leaderboard"
  | "Leaf"
  | "LeftRoundArrow"
  | "Lens"
  | "Lifebelt"
  | "LightBulbOff"
  | "LightBulbOn"
  | "LightBulb"
  | "LineSpace"
  | "Linear"
  | "Link"
  | "LinkedIn"
  | "Linux"
  | "ListSelect"
  | "List"
  | "LoadActionFloppy"
  | "LockKey"
  | "Lock"
  | "LockedBook"
  | "LockedWindow"
  | "LogDenied"
  | "LogIn"
  | "LogOut"
  | "LongArrowDownLeft"
  | "LongArrowDownRight"
  | "LongArrowLeftDown"
  | "LongArrowLeftUp"
  | "LongArrowRightDown"
  | "LongArrowRightUp1"
  | "LongArrowRightUp"
  | "LongArrowUpLeft"
  | "LongArrowUpRight"
  | "LotOfCash"
  | "MacControlKey"
  | "MacDock"
  | "MacOptionKey"
  | "MacOsWindow"
  | "MagnetEnergy"
  | "Magnet"
  | "MailIn"
  | "MailOpened"
  | "MailOut"
  | "Mail"
  | "Male"
  | "MapIssue"
  | "Map"
  | "MapsArrowDiagonal"
  | "MapsArrowIssue"
  | "MapsArrow"
  | "MapsGoStraight"
  | "MapsTurnBack"
  | "MapsTurnLeft"
  | "MapsTurnRight"
  | "MaskSquare"
  | "MastercardCard"
  | "MathBook"
  | "Maximize"
  | "Medal1St"
  | "Medal"
  | "MediaImageFolder"
  | "MediaImageList"
  | "MediaImage"
  | "MediaVideoFolder"
  | "MediaVideoList"
  | "MediaVideo"
  | "Medium"
  | "Megaphone"
  | "MenuScale"
  | "Menu"
  | "MessageAlert"
  | "MessageText"
  | "Message"
  | "Metro"
  | "MicAdd"
  | "MicCheck"
  | "MicMute"
  | "MicRemove"
  | "MicSpeaking"
  | "MicWarning"
  | "Mic"
  | "Microscope"
  | "Minus1"
  | "MinusCircle"
  | "MinusHexagon"
  | "MinusPinAlt"
  | "MinusSquare"
  | "Minus"
  | "Mirror"
  | "MissingFont"
  | "ModernTv4K"
  | "ModernTv"
  | "MoneySquare"
  | "MoonSat"
  | "MoreHorizCircle"
  | "MoreHoriz"
  | "MoreVertCircle"
  | "MoreVert"
  | "Motorcycle"
  | "MouseButtonLeft"
  | "MouseButtonRight"
  | "MouseScrollWheel"
  | "MoveDown"
  | "MoveLeft"
  | "MoveRight"
  | "MoveRuler"
  | "MoveUp"
  | "Movie"
  | "MpegFormat"
  | "MultiBubble"
  | "MultiMacOsWindow"
  | "MultiWindow"
  | "MultiplePagesAdd"
  | "MultiplePagesDelete"
  | "MultiplePagesEmpty"
  | "MultiplePagesRemove"
  | "MultiplePages"
  | "MusicDoubleNoteAdd"
  | "MusicDoubleNote"
  | "MusicNoteAdd"
  | "MusicNote"
  | "NavArrowDown"
  | "NavArrowLeft"
  | "NavArrowRight"
  | "NavArrowUp"
  | "NavigatorAlt"
  | "Navigator"
  | "NetworkAlt"
  | "NetworkLeft"
  | "NetworkRight"
  | "Network"
  | "NewTab"
  | "NintendoSwitch"
  | "Nitrogen"
  | "NoAccessWindow"
  | "NoBattery"
  | "NoCoin"
  | "NoCreditCard"
  | "NoLink"
  | "NoLock"
  | "NoSmokingCircle"
  | "NoSmoking"
  | "Notes"
  | "NpmSquare"
  | "Npm"
  | "NumberedListLeft"
  | "NumberedListRight"
  | "Octagon"
  | "OffTag"
  | "OilIndustry"
  | "OnTag"
  | "OneFingerSelectHandGesture"
  | "OnePointCircle"
  | "OpenBook"
  | "OpenInBrowser"
  | "OpenInWindow"
  | "OpenNewWindow"
  | "OpenSelectHandGesture"
  | "OpenVpn"
  | "OrangeHalf"
  | "OrangeSliceAlt"
  | "OrangeSlice"
  | "OrganicFoodSquare"
  | "OrganicFood"
  | "OrthogonalView"
  | "Oxygen"
  | "PackageLock"
  | "Package"
  | "Packages"
  | "Pacman"
  | "PageDown"
  | "PageEdit"
  | "PageFlip"
  | "PageLeft"
  | "PageRight"
  | "PageSearch"
  | "PageStar"
  | "PageUp"
  | "Page"
  | "Palette"
  | "PanoramaEnlarge"
  | "PanoramaReduce"
  | "PantsAlt"
  | "Pants"
  | "Parking"
  | "PasswordCursor"
  | "PasswordError"
  | "PasswordPass"
  | "PasteClipboard"
  | "PathArrow"
  | "PauseWindow"
  | "Pause"
  | "Paypal"
  | "PcCheck"
  | "PcFirewall"
  | "PcMouse"
  | "PcNoEntry"
  | "PcWarning"
  | "PeaceHand"
  | "PenConnectBluetooth"
  | "PenConnectWifi"
  | "PenTabletConnectUsb"
  | "PenTabletConnectWifi"
  | "PenTablet"
  | "Pentagon"
  | "PeopleTag"
  | "PercentageCircle"
  | "PercentageSquare"
  | "Percentage"
  | "PerspectiveView"
  | "PharmacyCrossCircle"
  | "PharmacyCrossSquare"
  | "PhoneAdd"
  | "PhoneDelete"
  | "PhoneDisabled"
  | "PhoneIncome"
  | "PhoneOutcome"
  | "PhonePaused"
  | "PhoneRemove"
  | "Phone"
  | "PiggyBank"
  | "Pillow"
  | "PinAlt"
  | "Pin"
  | "PineTree"
  | "Pinterest"
  | "PizzaSlice"
  | "PlanetAlt"
  | "PlanetSat"
  | "Planet"
  | "Play"
  | "PlaylistAdd"
  | "PlaylistPlay"
  | "Playlist"
  | "PlaystationGamepad"
  | "PlugTypeA"
  | "PlugTypeC"
  | "PlugTypeG"
  | "PlugTypeL"
  | "Plus"
  | "PngFormat"
  | "Pocket"
  | "Podcast"
  | "Pokeball"
  | "PositionAlign"
  | "Position"
  | "Potion"
  | "Pound"
  | "PrecisionTool"
  | "PrinterAlt"
  | "Printer"
  | "PrintingPage"
  | "PriorityDown"
  | "PriorityUp"
  | "PrivateWifi"
  | "ProfileCircle"
  | "Prohibition"
  | "Puzzle"
  | "QrCode"
  | "QuestionMark"
  | "QuoteMessage"
  | "Quote"
  | "Radiation"
  | "Radius"
  | "Rain"
  | "RawFormat"
  | "ReceiveDollars"
  | "ReceiveEuros"
  | "ReceivePounds"
  | "ReceiveYens"
  | "RedoAction"
  | "RedoCircle"
  | "Redo"
  | "ReduceRoundArrow"
  | "Reduce"
  | "RefreshCircular"
  | "RefreshDouble"
  | "Refresh"
  | "ReloadWindow"
  | "ReminderHandGesture"
  | "RemoveDatabaseScript"
  | "RemoveFolder"
  | "RemoveFrame"
  | "RemoveFromCart"
  | "RemoveKeyframeAlt"
  | "RemoveKeyframe"
  | "RemoveKeyframes"
  | "RemoveLink"
  | "RemoveMediaImage"
  | "RemoveMediaVideo"
  | "RemovePageAlt"
  | "RemovePage"
  | "RemovePinAlt"
  | "RemovePin"
  | "RemoveSelection"
  | "RemoveSquare"
  | "RemoveUser"
  | "RepeatOnce"
  | "Repeat"
  | "ReplyToMessage"
  | "Reply"
  | "ReportColumns"
  | "Reports"
  | "Repository"
  | "Restart"
  | "Rewind"
  | "Rhombus"
  | "RightRoundArrow"
  | "Rings"
  | "Rocket"
  | "Rook"
  | "RotateCameraLeft"
  | "RotateCameraRight"
  | "RoundFlask"
  | "RoundedMirror"
  | "RssFeedTag"
  | "RssFeed"
  | "RubikCube"
  | "RulerAdd"
  | "RulerCombine"
  | "RulerRemove"
  | "Ruler"
  | "Running"
  | "Safari"
  | "Sandals"
  | "SaveActionFloppy"
  | "SaveFloppyDisk"
  | "ScaleFrameEnlarge"
  | "ScaleFrameReduce"
  | "ScanBarcode"
  | "ScanQrCode"
  | "Scanning"
  | "Scarf"
  | "ScissorAlt"
  | "Scissor"
  | "Screenshot"
  | "SeaAndSun"
  | "SeaWaves"
  | "SearchEngine"
  | "SearchFont"
  | "SearchWindow"
  | "Search"
  | "SecureWindow"
  | "SecurityPass"
  | "SelectWindow"
  | "Selection"
  | "SelectiveTool"
  | "SendDiagonal"
  | "SendDollars"
  | "SendEuros"
  | "SendMail"
  | "SendPounds"
  | "SendYens"
  | "Send"
  | "ServerConnection"
  | "Server"
  | "SettingsCloud"
  | "SettingsProfiles"
  | "Settings"
  | "ShareAndroid"
  | "ShareIos"
  | "ShieldAdd"
  | "ShieldAlert"
  | "ShieldAlt"
  | "ShieldBroken"
  | "ShieldCheck"
  | "ShieldCross"
  | "ShieldDownload"
  | "ShieldEye"
  | "ShieldLoading"
  | "ShieldMinus"
  | "ShieldQuestion"
  | "ShieldSearch"
  | "ShieldUpload"
  | "Shield"
  | "ShopAlt"
  | "Shop"
  | "ShoppingBagAdd"
  | "ShoppingBagAlt"
  | "ShoppingBagArrowDown"
  | "ShoppingBagArrowUp"
  | "ShoppingBagCheck"
  | "ShoppingBagIssue"
  | "ShoppingBagRemove"
  | "ShoppingBag"
  | "ShoppingCodeCheck"
  | "ShoppingCodeError"
  | "ShoppingCode"
  | "ShortPantsAlt"
  | "ShortPants"
  | "Shortcut"
  | "Shuffle"
  | "SidebarCollapse"
  | "SidebarExpand"
  | "SigmaFunction"
  | "SimpleCart"
  | "SingleTapGesture"
  | "Skateboard"
  | "Skateboarding"
  | "SkipNext"
  | "SkipPrev"
  | "SleeperChair"
  | "SmallLampAlt"
  | "SmallLamp"
  | "SmallShopAlt"
  | "SmallShop"
  | "SmartphoneDevice"
  | "Smoking"
  | "Snapchat"
  | "SnowFlake"
  | "Snow"
  | "Soap"
  | "SoccerBall"
  | "Sofa"
  | "SoilAlt"
  | "Soil"
  | "SortDown"
  | "SortUp"
  | "Sort"
  | "SoundHigh"
  | "SoundLow"
  | "SoundMin"
  | "SoundOff"
  | "Spades"
  | "Sphere"
  | "Spiral"
  | "SpockHandGesture"
  | "Square"
  | "Stackoverflow"
  | "StarDashed"
  | "StarHalfDashed"
  | "Star"
  | "StatDown"
  | "StatUp"
  | "StatsDownSquare"
  | "StatsReport"
  | "StatsUpSquare"
  | "Stretching"
  | "Stroller"
  | "StyleBorder"
  | "SubmitDocument"
  | "Substract"
  | "Suggestion"
  | "SunLight"
  | "SvgFormat"
  | "Swimming"
  | "SwipeDownGesture"
  | "SwipeLeftGesture"
  | "SwipeRightGesture"
  | "SwipeTwoFingersDownGesture"
  | "SwipeTwoFingersLeftGesture"
  | "SwipeTwoFingersRightGesture"
  | "SwipeTwoFingersUpGesture"
  | "SwipeUpGesture"
  | "SwitchOff"
  | "SwitchOn"
  | "SystemRestart"
  | "SystemShut"
  | "Table2Columns"
  | "TableRows"
  | "Table"
  | "TaskList"
  | "TelegramCircle"
  | "Telegram"
  | "TennisBallAlt"
  | "TennisBall"
  | "TerminalTag"
  | "Terminal"
  | "TestTube"
  | "TextAlt"
  | "TextBox"
  | "TextSize"
  | "Text"
  | "ThreePointsCircle"
  | "ThreeStars"
  | "ThumbsDown"
  | "ThumbsUp"
  | "Thunderstorm"
  | "TifFormat"
  | "TiffFormat"
  | "TikTok"
  | "TimerOff"
  | "Timer"
  | "Tools"
  | "Tournament"
  | "TowerCheck"
  | "TowerNoAccess"
  | "TowerWarning"
  | "Tower"
  | "Trademark"
  | "Train"
  | "Tram"
  | "TransitionDown"
  | "TransitionLeft"
  | "TransitionRight"
  | "TransitionUp"
  | "Translate"
  | "Trash"
  | "Treadmill"
  | "Tree"
  | "Trekking"
  | "Trello"
  | "TriangleFlagCircle"
  | "TriangleFlagTwoStripes"
  | "TriangleFlag"
  | "Triangle"
  | "Trophy"
  | "TruckLength"
  | "Truck"
  | "Tunnel"
  | "TvFix"
  | "TvIssue"
  | "Tv"
  | "TwitterVerifiedBadge"
  | "Twitter"
  | "TwoPointsCircle"
  | "TwoSeaterSofa"
  | "Type"
  | "UmbrellaFull"
  | "UnderlineSquare"
  | "Underline"
  | "UndoAction"
  | "UndoCircle"
  | "Undo"
  | "UnionAlt"
  | "UnionHorizAlt"
  | "Union"
  | "Unity5"
  | "Unity"
  | "UpRoundArrow"
  | "UploadDataWindow"
  | "UploadSquare"
  | "Upload"
  | "Usb"
  | "UserBag"
  | "UserCart"
  | "UserCircle"
  | "UserScan"
  | "UserSquare"
  | "User"
  | "VeganCircle"
  | "VeganSquare"
  | "Vegan"
  | "VerifiedBadge"
  | "VerifiedUser"
  | "VerticalMerge"
  | "VerticalSplit"
  | "Vials"
  | "VideoCameraOff"
  | "VideoCamera"
  | "ViewColumns2"
  | "ViewColumns3"
  | "ViewGrid"
  | "ViewStructureDown"
  | "ViewStructureUp"
  | "View360"
  | "VoiceCircle"
  | "VoiceError"
  | "VoiceLockCircle"
  | "VoiceOk"
  | "VoicePhone"
  | "VoiceScan"
  | "VoiceSquare"
  | "Voice"
  | "VrSymbol"
  | "Waist"
  | "Walking"
  | "Wallet"
  | "WarningCircle"
  | "WarningHexagon"
  | "WarningSquare"
  | "WarningTriangle"
  | "WarningWindow"
  | "Wash"
  | "WashingMachine"
  | "WateringSoil"
  | "WebWindowClose"
  | "WebWindowEnergyConsumption"
  | "WebWindow"
  | "WebpFormat"
  | "WeightAlt"
  | "Weight"
  | "WhiteFlag"
  | "WifiError"
  | "WifiIssue"
  | "WifiOff"
  | "WifiSignalNone"
  | "WifiTag"
  | "Wifi"
  | "Wind"
  | "Windows"
  | "WrapText"
  | "Wrench"
  | "Wristwatch"
  | "Www"
  | "XCoordinate"
  | "XboxA"
  | "XboxB"
  | "XboxX"
  | "XboxY"
  | "XrayView"
  | "YCoordinate"
  | "YenSquare"
  | "Yen"
  | "Yoga"
  | "YouTube"
  | "ZCoordinate"
  | "ZoomIn"
  | "ZoomOut";

export type { IconName };
export { iconNames };
