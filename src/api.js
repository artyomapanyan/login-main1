const endpoint = 'http://ffa/api/';
const version = 'v1';
const GOOGLE_MAPS_API_KEY = null;

let api = {
    GOOGLE_MAPS_API_KEY,
    Revision: {
        list: {
            url: `${endpoint}${version}/revisions`,
            method: 'GET',
        },
    },
    Auth: {
        login: {
            url: `${endpoint}${version}/auth/login`,
            method: 'POST',
        },
        logout: {
            url: `${endpoint}${version}/auth/logout`,
            method: 'POST',
        },
        forgot: {
            url: `${endpoint}${version}/auth/forgot`,
            method: 'POST',
        },
        reset: {
            url: `${endpoint}${version}/auth/reset`,
            method: 'POST',
        },
        me: {
            url: `${endpoint}${version}/auth/me`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/auth/me`,
            method: 'PUT',
        },
        verification: {
            url: `${endpoint}${version}/auth/verify-email`,
            method: "POST"
        },
        notificationsCount: {
            url: `${endpoint}${version}/auth/notifications/count`,
            method: 'GET',
        },
    },

    ContractRequest: {
        list: {
            url: `${endpoint}${version}/contract-requests`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/contract-requests/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/contract-requests/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/contract-requests`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/contract-requests/`,
            method: 'DELETE',
        },
        confirm: {
            url: `${endpoint}${version}/contract-requests/confirm/`,
            method: 'POST',
        }
    },
    RegistrationRequest: {
        list: {
            url: `${endpoint}${version}/registration-requests`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/registration-requests/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/registration-requests/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/registration-requests`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/registration-requests/`,
            method: 'DELETE',
        },
        confirm: {
            url: `${endpoint}${version}/registration-requests/confirm/`,
            method: 'POST',
        }
    },
    Announcement: {
        list: {
            url: `${endpoint}${version}/announcements`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/announcements/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/announcements/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/announcements`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/announcements/`,
            method: 'DELETE',
        },
        approve: {
            url: `${endpoint}${version}/announcements/is-approve/`,
            method: 'POST',
        },
        attachPlayer: {
            url: `${endpoint}${version}/announcements/player-attach/`,
            method: 'POST',
        },
        playerUpdate: {
            url: `${endpoint}${version}/announcements/player-update/`,
            method: 'POST',
        },
        playerCreate: {
            url: `${endpoint}${version}/announcements/player-create/`,
            method: 'POST',
        },
        officialUpdate: {
            url: `${endpoint}${version}/announcements/officials-update/`,
            method: 'POST',
        },
        officialCreate: {
            url: `${endpoint}${version}/announcements/officials-create/`,
            method: 'POST',
        },
        detachPlayer: {
            url: `${endpoint}${version}/announcements/player-detach/`,
            method: 'POST',
        },
        attachOfficial: {
            url: `${endpoint}${version}/announcements/official-attach/`,
            method: 'POST',
        },
        detachOfficial: {
            url: `${endpoint}${version}/announcements/official-detach/`,
            method: 'POST',
        },
        valid:{
            url: `${endpoint}${version}/announcements/valid/`,
            method: 'GET',
        },
        clubValid:{
            url: `${endpoint}${version}/announcements/club-valid/`,
            method: 'GET',
        },
        ExportPdf:{
            url: `${endpoint}${version}/announcements/export-pdf`,
            method: 'GET',
        },
        terminate:{
            url: `${endpoint}${version}/announcements/player-terminate/`,
            method: 'POST',
        },
        decline:{
            url: `${endpoint}${version}/announcements/player-decline/`,
            method: 'POST',
        },

    },

    PlayerRegistration: {
        list: {
            url: `${endpoint}${version}/player-registrations`,
            method: 'GET',
        },
        //unus?
        claimed: {
            url: `${endpoint}${version}/player-registrations/claimed`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/player-registrations/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/player-registrations/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/player-registrations`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/player-registrations/`,
            method: 'DELETE',
        },
        all: {
            url: `${endpoint}${version}/player-registrations/all`,
            method: 'GET',
        },
        search: {
            url: `${endpoint}${version}/player-registrations/search`,
            method: 'GET',
        },
        ExportPdf:{
            url: `${endpoint}${version}/player-registrations/export-pdf`,
            method: 'GET',
        },
    },
    Match: {
        list: {
            url: `${endpoint}${version}/matches`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/matches/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/matches/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/matches`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/matches/`,
            method: 'DELETE',
        },
        all: {
            url: `${endpoint}${version}/matches/overlap`,
            method: 'GET',
        },
        search:{
            url: `${endpoint}${version}/matches/search`,
            method: 'GET',
        },
        generatePersonPdf: {
            url: `${endpoint}${version}/match/generate-persons-pdf/`,
            method: 'GET',
        },
        generateProtocol: {
            url: `${endpoint}${version}/match/generate-protocol-pdf/`,
            method: 'GET',
        },
        exportMatches: {
            url: `${endpoint}${version}/match/export-matches`,
            method: 'GET',
        },
        exportMatchPr: {
            url: `${endpoint}${version}/match/generate-sec-pr-pdf/`,
            method: 'GET',
        },
        confirmOfficials: {
            url: `${endpoint}${version}/matches/confirm-match-officials/`,
            method: 'POST',
        },
        completeOfficials: {
            url: `${endpoint}${version}/matches/complete-match-officials/`,
            method: 'GET',
        },
        additionalTimes: {
            url: `${endpoint}${version}/matches/update-additional-times/`,
            method: 'POST',
        },
        OpenReport: {
            url: `${endpoint}${version}/matches/toggle-delegate-report-allow/`,
            method: 'GET',
        },
        comment: {
            url: `${endpoint}${version}/matches/comment/`,
            method: 'POST',
        },


    },

    Patent: {
        list: {
            url: `${endpoint}${version}/patents`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/patents/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/patents/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/patents`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/patents/`,
            method: 'DELETE',
        },
        document: {
            url: `${endpoint}${version}/patents/documents/`,
            method: 'POST',
        },
        comment: {
            url: `${endpoint}${version}/patents/comment/`,
            method: 'POST',
        },
        confirm: {
            url: `${endpoint}${version}/patents/confirm/`,
            method: 'POST',
        },
        apply: {
            url: `${endpoint}${version}/patents/can-apply`,
            method: 'POST',
        },
        downloadFile: {
            url: `${endpoint}${version}/patents/download-manual`,
            method: 'GET',
        },
    },
    MatchReport: {
        list: {
            url: `${endpoint}${version}/match-reports`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/match-reports/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/match-reports/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/match-reports`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/match-reports/`,
            method: 'DELETE',
        },
        confirm:{
            url: `${endpoint}${version}/match-reports/confirm/`,
            method: 'POST',
        },
        generateReport: {
            url: `${endpoint}${version}/match/generate-report-pdf/`,
            method: 'GET',
        },

    },
    MatchOfficial: {
        list: {
            url: `${endpoint}${version}/match-officials`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/match-officials/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/match-officials/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/match-officials`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/match-officials/`,
            method: 'DELETE',
        },
        confirm: {
            url: `${endpoint}${version}/match-officials/confirm/`,
            method: 'POST',
        },
    },

    DelegateMatchReport: {
        list: {
            url: `${endpoint}${version}/delegate-match-reports`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/delegate-match-reports/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/delegate-match-reports/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/delegate-match-reports`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/delegate-match-reports/`,
            method: 'DELETE',
        },
        generateReport: {
            url: `${endpoint}${version}/delegate-match-reports/pdf/`,
            method: 'GET',
        }
    },
    DelegateAdditionalMatchReport: {
        create: {
            url: `${endpoint}${version}/delegate-additional-match-reports`,
            method: 'POST',
        },
        generateReport: {
            url: `${endpoint}${version}/delegate-additional-match-reports/pdf/`,
            method: 'GET',
        }

    },
    DelegateFairGameReport: {
        create: {
            url: `${endpoint}${version}/delegate-fair-game-reports`,
            method: 'POST',
        },
        generateReport: {
            url: `${endpoint}${version}/delegate-fair-game-reports/pdf/`,
            method: 'GET',
        }
    },
    Contract: {
        list: {
            url: `${endpoint}${version}/contracts`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/contracts/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/contracts/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/contracts`,
            method: 'POST',
        },
        free: {
            url: `${endpoint}${version}/contracts/free`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/contracts/`,
            method: 'DELETE',
        },
        all: {
            url: `${endpoint}${version}/contracts/unrelated`,
            method: 'GET',
        },

        confirm: {
            url: `${endpoint}${version}/contracts/confirm/`,
            method: 'POST',
        }

    },
    Termination: {
        update: {
            url: `${endpoint}${version}/terminate/`,
            method: 'PUT',
        },
    },
    Card: {
        all: {
            url: `${endpoint}${version}/cards/all`,
            method: 'GET',
        },
        confirm: {
            url: `${endpoint}${version}/cards/confirm`,
            method: 'POST',
        },
    },

    Transfer: {
        list: {
            url: `${endpoint}${version}/transfers`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/transfers/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/transfers/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/transfers`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/transfers/`,
            method: 'DELETE',
        },
        comment: {
            url: `${endpoint}${version}/transfers/comment/`,
            method: 'POST',
        },
        confirm: {
            url: `${endpoint}${version}/transfers/confirm/`,
            method: 'POST',
        },
        Compensation: {
            url: `${endpoint}${version}/transfers/attach-training-compensation-doc/`,
            method: 'POST',
        },
        confirmCompensation: {
            url: `${endpoint}${version}/transfers/confirm-training-compensation-doc/`,
            method: 'POST',
        },
    },
    InternationalTransfer: {
        list: {
            url: `${endpoint}${version}/international-transfers`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/international-transfers/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/international-transfers/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/international-transfers`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/international-transfers/`,
            method: 'DELETE',
        },
        comment: {
            url: `${endpoint}${version}/international-transfers/comment/`,
            method: 'POST',
        },
        confirm: {
            url: `${endpoint}${version}/international-transfers/confirm/`,
            method: 'POST',
        },
    },
    DashboardPersons: {
        list: {
            url: `${endpoint}${version}/dashboard/persons`,
            method: 'GET',
        },
    },
    DashboardContracts: {
        list: {
            url: `${endpoint}${version}/dashboard/contracts`,
            method: 'GET',
        },
    },
    DashboardAnnouncements: {
        list: {
            url: `${endpoint}${version}/dashboard/announcements`,
            method: 'GET',
        },
    },
    DashboardOrganisations: {
        list: {
            url: `${endpoint}${version}/dashboard/organisations`,
            method: 'GET',
        },
    },
    DashboardCompetitions: {
        list: {
            url: `${endpoint}${version}/dashboard/competitions`,
            method: 'GET',
        },
    },
    DashboardRegistrationWindows: {
        list: {
            url: `${endpoint}${version}/dashboard/registrationWindows`,
            method: 'GET',
        },
    },
    Calculate: {
        calc: {
            url: `${endpoint}${version}/transfers/calculate`,
            method: 'POST',
        },
    },
    RoadExpense: {
        list: {
            url: `${endpoint}${version}/road-expenses`,
            method: 'GET',
        },
        single: {
            url: `${endpoint}${version}/road-expenses/`,
            method: 'GET',
        },
        update: {
            url: `${endpoint}${version}/road-expenses/`,
            method: 'PUT',
        },
        create: {
            url: `${endpoint}${version}/road-expenses`,
            method: 'POST',
        },
        delete: {
            url: `${endpoint}${version}/road-expenses/`,
            method: 'DELETE',
        },
        calc: {
            url: `${endpoint}${version}/road-expenses/calculate`,
            method: 'POST',
        },
        RefCalc: {
            url: `${endpoint}${version}/road-expenses/calculate-match-officials`,
            method: 'POST',
        },
        exportPdf: {
            url: `${endpoint}${version}/road-expenses/export-pdf`,
            method: 'GET',
        },
    },
    ValidPlayerRegistration: {
        all: {
            url: `${endpoint}${version}/player-registrations/valid`,
            method: 'GET',
        },
    },
    ValidTeamRegistration: {
        all: {
            url: `${endpoint}${version}/team-registrations/valid`,
            method: 'GET',
        },
    }

};
[
    {
        url: 'permissions',
        resource: 'Permission',
        type: 'resource',
    },
    {
        url: 'player-positions',
        resource: 'PlayerPosition',
        type: 'resource',
    },
    {
        url: 'statuses',
        resource: 'Status',
        type: 'resource',
    },
    {
        url: 'organisation-facility-natures',
        resource: 'OrganisationFacilityNature',
        type: 'resource',
    },
    {
        url: 'patent-natures',
        resource: 'PatentNature',
        type: 'resource',
    },
    {
        url: 'contact-natures',
        resource: 'ContactNature',
        type: 'resource',
    },
    {
        url: 'confirmation-statuses',
        resource: 'ConfirmationStatus',
        type: 'resource',
    },
    {
        url: 'contract-statuses',
        resource: 'ContractStatus',
        type: 'resource',
    },
    {
        url: 'match-statuses',
        resource: 'MatchStatus',
        type: 'resource',
    },
    {
        url: 'competition-system-natures',
        resource: 'CompetitionSystemNature',
        type: 'resource',
    },
    {
        url: 'competition-subcategories',
        resource: 'CompetitionSubcategory',
        type: 'resource',
    },
    {
        url: 'organisation-natures',
        resource: 'OrganisationNature',
        type: 'resource',
    },
    {
        url: 'national-identifier-natures',
        resource: 'NationalIdentifierNature',
        type: 'resource',
    },
    {
        url: 'genders',
        resource: 'Gender',
        type: 'resource',
    },
    {
        url: 'document-types',
        resource: 'DocumentType',
        type: 'resource',
    },
    {
        url: 'ground-natures',
        resource: 'GroundNature',
        type: 'resource',
    },
    {
        url: 'disciplines',
        resource: 'Discipline',
        type: 'resource',
    },
    {
        url: 'languages',
        resource: 'Language',
        type: 'resource',
    },
    {
        url: 'registration-levels',
        resource: 'RegistrationLevel',
        type: 'resource',
    },
    {
        url: 'player-registration-natures',
        resource: 'PlayerRegistrationNature',
        type: 'resource',
    },
    {
        url: 'player-roles',
        resource: 'PlayerRole',
        type: 'resource',
    },
    {
        url: 'club-category-natures',
        resource: 'ClubCategoryNature',
        type: 'resource',
    },
    {
        url: 'team-levels',
        resource: 'FfaTeamLevel',
        type: 'resource',
    },
    {
        url: 'competition-team-characters',
        resource: 'CompetitionTeamCharacter',
        type: 'resource',
    },
    {
        url: 'match-official-role-natures',
        resource: 'MatchOfficialRoleNature',
        type: 'resource',
    },

    {
        url: 'match-event-detail-natures',
        resource: 'MatchEventDetailNature',
        type: 'resource',
    },
    {
        url: 'match-team-natures',
        resource: 'MatchTeamNature',
        type: 'resource',
    },
    {
        url: 'match-phase-natures',
        resource: 'MatchPhaseNature',
        type: 'resource',
    },
    {
        url: 'grassroots-roles',
        resource: 'GrassrootsRole',

    },
    {
        url: 'grassroots-event-persons',
        resource: 'GrassrootsEventPerson',

    },
    {
        url: 'grassroots-event-natures',
        resource: 'GrassrootsEventNature',
    },
    {
        url: 'rounds',
        resource: 'Round',
    },
    {
        url: 'team-valuations',
        resource: 'TeamValuation',
    },
    {
        url: 'logs',
        resource: 'Log',
    },
    {
        url: 'staff',
        resource: 'Staff',
    },
    {
        url: 'contract-terminations',
        resource: 'ContractTermination',
        custom: {
            confirm: {
                url: `${endpoint}${version}/contract-terminations/confirm/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'registration-terminations',
        resource: 'RegistrationTermination',
        custom: {
            confirm: {
                url: `${endpoint}${version}/registration-terminations/confirm/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'appeal-disc-committee-decisions',
        resource: 'AppealDisciplinaryCommitteeDecision',
    },
    {
        url: 'appeal-committee-persons',
        resource: 'AppealCommitteePerson',
    },
    {
        url: 'users',
        resource: 'User',
    },
    {
        url: 'location-types',
        resource: 'LocationType',
    },
    {
        url: 'locations',
        resource: 'Location',
    },
    {
        url: 'match-event-natures',
        resource: 'MatchEventNature',
    },
    {
        url: 'working-persons',
        resource: 'WorkingPerson',
    },
    {
        url: 'national-tournaments',
        resource: 'NationalTournament',
        custom: {
            SYNC: {
                url: `${endpoint}${version}/national-tournaments/sync-website/`,
                method: 'GET',
            },
        }
    },
    {
        url: 'national-team-staffs',
        resource: 'NationalTeamStaff',
    },
    {
        url: 'competitions',
        resource: 'Competition',
        custom: {
            calculate: {
                url: `${endpoint}${version}/competitions/regenerate-statistics/`,
                method: 'GET',
            },
        }
    },
    {
        url: 'grassroots-yearly-plans',
        resource: 'GrassrootsYearlyPlan',
    },
    {
        url: 'match-official-registrations',
        resource: 'MatchOfficialRegistration',
        custom: {
            confirm: {
                url: `${endpoint}${version}/match-official-registrations/visibility/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'competition-teams',
        resource: 'CompetitionTeam',
        custom: {
            suspend: {
                url: `${endpoint}${version}/competition-teams/suspend`,
                method: 'POST',
            },
        }
    },
    {
        url: 'busy-calendars',
        resource: 'BusyCalendar',
    },
    {
        url: 'fifa-organisations',
        resource: 'FifaOrganisation',
        custom: {
            bulkStore: {
                url: `${endpoint}${version}/fifa-organisations/bulk-store`,
                method: 'POST',
            },
        }
    },
    {
        url: 'fifa-facilities',
        resource: 'FifaFacility',
        custom: {
            bulkStore: {
                url: `${endpoint}${version}/fifa-facilities/bulk-store`,
                method: 'POST',
            },
        }
    },
    {
        url: 'clubs',
        resource: 'Club',
    },
    {
        url: 'teams',
        resource: 'Team',
    },
    {
        url: 'persons',
        resource: 'Person',
    },
    {
        url: 'fifa-persons',
        resource: 'FifaPerson',
        custom: {
            getDuplicates: {
                url: `${endpoint}${version}/fifa-persons/find-duplicates`,
                method: 'POST',
            },
            getDuplicatesById: {
                url: `${endpoint}${version}/fifa-persons/find-duplicates-by-fifa-id`,
                method: 'POST',
            },
            mergeDuplicates: {
                url: `${endpoint}${version}/fifa-persons/merge`,
                method: 'POST',
            },
            unmergeDuplicates: {
                url: `${endpoint}${version}/fifa-persons/unmerge`,
                method: 'POST',
            },
            bulkStore: {
                url: `${endpoint}${version}/fifa-persons/bulk-store`,
                method: 'POST',
            },
        }


    },
    {
        url: 'fifa-player-registrations',
        resource: 'FifaPlayerRegistration',
    },
    {
        url: 'fifa-official-registrations',
        resource: 'FifaOrganisationOfficialRegistration',
    },
    {
        url: 'fifa-team-registrations',
        resource: 'FifaTeamOfficialRegistration',
    },
    {
        url: 'fifa-match-official-registrations',
        resource: 'FifaMatchOfficialRegistration',
    },
    {
        url: 'facilities',
        resource: 'Facility',
    },
    {
        url: 'local-names',
        resource: 'LocalName',
    },
    {
        url: 'disciplinary-fines',
        resource: 'DisciplinaryFine',
    },
    {
        url: 'seasons',
        resource: 'Season',
    },
    {
        url: 'fields',
        resource: 'Field',
    },
    {
        url: 'local-person-names',
        resource: 'LocalPersonName',
    },
    {
        url: 'national-identifiers',
        resource: 'NationalIdentifier',
    },
    {
        url: 'supported-disciplines',
        resource: 'SupportedDiscipline',
    },
    {
        url: 'national-facilities',
        resource: 'NationalFacility',
    },
    {
        url: 'international-persons',
        resource: 'InternationalPerson',
    },
    {
        url: 'national-match-rival-team-staffs',
        resource: 'NationalMatchRivalTeamStaff',
    },
    {
        url: 'national-team-match-officials',
        resource: 'NationalTeamMatchOfficial',
    },
    {
        url: 'person-fines',
        resource: 'PersonFine',
        custom: {
            CanPlay: {
                url: `${endpoint}${version}/person-fines/can-play-in-match`,
                method: 'POST',
            },
            PaymentDocument: {
                url: `${endpoint}${version}/person-fines/attach-payment-document/`,
                method: 'POST',
            },
            exportPdf: {
                url: `${endpoint}${version}/person-fines/export-pdf`,
                method: 'GET',
            },
        }
    },
    {
        url: 'organisation-fines',
        resource: 'OrganisationFine',
        custom: {
            PaymentDocument: {
                url: `${endpoint}${version}/organisation-fines/attach-payment-document/`,
                method: 'POST',
            },
            exportPdf: {
                url: `${endpoint}${version}/organisation-fines/export-pdf`,
                method: 'GET',
            },
        }
    },
    {
        url: 'person-fine-types',
        resource: 'PersonFineType',
    },
    {
        url: 'organisation-fine-types',
        resource: 'OrganisationFineType',
    },
    {
        url: 'person-nature-payment-rates',
        resource: 'PersonNaturePaymentRate',
    },
    {
        url: 'organisation-registrations',
        resource: 'OrganisationOfficialRegistration',
    },
    {
        url: 'match-events/person-events',
        resource: 'PersonEvent',
    },
    {
        url: 'person-fines/miss-game',
        resource: 'MissGamePersonFine',
    },
    {
        url: 'team-registrations',
        resource: 'TeamOfficialRegistration',
    },
    {
        url: 'roles',
        resource: 'Role',
    },
    {
        url: 'files',
        resource: 'File',
    },
    {
        url: 'documents',
        resource: 'Document',
    },
    {
        url: 'grassroots-representatives',
        resource: 'GrassrootsRepresentative',
    },
    {
        url: 'tasks',
        resource: 'Task',
    },
    {
        url: 'registration-windows',
        resource: 'RegistrationWindow',
        custom:{
            all: {
                url: `${endpoint}${version}/registration-windows/actual`,
                method: 'GET',
            },
        }
    },
    {
        url: 'contacts',
        resource: 'Contact',
    },
    {
        url: 'healths',
        resource: 'Health',
    },
    {
        url: 'visas',
        resource: 'Visa',
    },
    {
        url: 'organisation-facilities',
        resource: 'OrganisationFacility',
        custom: {
            confirm: {
                url: `${endpoint}${version}/organisation-facilities/confirm/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'notifications',
        resource: 'Notification',
    },
    {
        url: 'match-officials-rates',
        resource: 'MatchOfficialsRate',
    },
    {
        url: 'settings',
        resource: 'Setting',
    },
    {
        url: 'organisation-official-roles',
        resource: 'OrganisationOfficialRole',
    },
    {
        url: 'team-official-roles',
        resource: 'TeamOfficialRole',
    },
    {
        url: 'match-official-roles',
        resource: 'MatchOfficialRole',
    },
    {
        url: 'club-categories',
        resource: 'ClubCategory',
    },
    {
        url: 'gate-types',
        resource: 'GateType',
    },
    {
        url: 'relative-natures',
        resource: 'KinsmanNature',
    },
    {
        url: 'person-relatives',
        resource: 'Kinsman',
    },
    {
        url: 'competition-certifications',
        resource: 'CompetitionCertification',
        custom: {
            comment: {
                url: `${endpoint}${version}/competition-certifications/comment/`,
                method: 'POST',
            },
        }
    },
    {
        url: 'competition-natures',
        resource: 'CompetitionNature',
    },
    {
        url: 'disciplinary-agenda-items',
        resource: 'DisciplinaryAgendaItem',
        custom: {
            generateAgendaPDF: {
                url: `${endpoint}${version}/disciplinary-agenda-items/generate-pdf/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'competition-nature-officials',
        resource: 'CompetitionNatureMatchOfficial',
    },
    {
        url: 'match-events',
        resource: 'MatchEvent',
        custom:{
            all: {
                url: `${endpoint}${version}/match-events/actual`,
                method: 'GET',
            },
            confirm: {
                url: `${endpoint}${version}/match-events/next-disciplinary/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'national-match-events',
        resource: 'NationalMatchEvent',
    },
    {
        url: 'national-match-rival-teams',
        resource: 'NationalMatchRivalTeam',
    },
    {
        url: 'match-official-reports',
        resource: 'MatchOfficialReport',
    },
    {
        url: 'match-players',
        resource: 'MatchPlayer',
    },
    {
        url: 'match-team-officials',
        resource: 'MatchTeamOfficial',
    },
    {
        url: 'national-gathering-staffs',
        resource: 'NationalGatheringsStaff',
    },
    {
        url: 'age-category-natures',
        resource: 'AgeCategoryNature',
    },
    {
        url: 'goods-natures',
        resource: 'GoodsNature',
    },
    {
        url: 'resource-requests',
        resource: 'ResourceRequest',
        custom: {
            confirm: {
                url: `${endpoint}${version}/resource-requests/confirm/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'national-teams',
        resource: 'NationalTeam',
        custom: {
            Publish: {
                url: `${endpoint}${version}/national-teams/publish/`,
                method: 'GET',
            }
        }
    },
    {
        url: 'national-events',
        resource: 'NationalEvent',
    },
    {
        url: 'national-team-matches',
        resource: 'NationalTeamMatch',
        custom: {
            sync: {
                url: `${endpoint}${version}/national-team-matches/sync`,
                method: 'POST',
            },
            getRivalPlayers: {
                url: `${endpoint}${version}/national-team-matches/sync-staff/`,
                method: 'POST',
            },

        }
    },
    {
        url: 'national-gatherings',
        resource: 'NationalGathering',
        custom: {
            all: {
                url: `${endpoint}${version}/national-gatherings/valid`,
                method: 'GET',
            }
        }
    },
    {
        url: 'national-team-match-staffs',
        resource: 'NationalTeamMatchStaff',
        custom: {
            fetchFromLocation: {
                url: `${endpoint}${version}/national-team-match-staffs/sync-players/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'contract-prolongations',
        resource: 'ContractProlongation',
        custom: {
            confirm: {
                url: `${endpoint}${version}/contract-prolongations/confirm/`,
                method: 'POST',
            }
        }
    },
    {
        url: 'person-services',
        resource: 'PersonService',
    },
    {
        url: 'disciplinary-committee-decisions',
        resource: 'DisciplinaryCommitteeDecision',
    },
    {
        url: 'appeal-committee-decisions',
        resource: 'AppealCommitteeDecision',
    },
    {
        url: 'disciplinary-committee-persons',
        resource: 'DisciplinaryCommitteePerson',
    },
    {
        url: 'disciplinary-committees',
        resource: 'DisciplinaryCommittee',
        custom: {
            actual: {
                url: `${endpoint}${version}/disciplinary-committees/actual`,
                method: 'GET',
            },
        }
    },
    {
        url: 'appeal-committees',
        resource: 'AppealCommittee',
    },
    {
        url: 'grassroots-planned-events',
        resource: 'GrassrootsPlannedEvent',
    },
    {
        url: 'grassroots-events',
        resource: 'GrassrootsEvent',

    },
    {
        url: 'grassroots-used-goods',
        resource: 'GrassrootsUsedGoods',
    },
    {
        url: 'facility-inspections',
        resource: 'FacilityInspection',
        custom: {
            confirm: {
                url: `${endpoint}${version}/facility-inspections/confirm/`,
                method: 'POST',
            },
        }
    },
    {
        url: 'national-gathering-locations',
        resource: 'NationalGatheringLocation',
        custom: {
            all: {
                url: `${endpoint}${version}/national-gathering-locations/valid`,
                method: 'GET',
            },
            syncPrevious: {
                url: `${endpoint}${version}/national-gathering-locations/sync-staff/`,
                method: 'POST',
            },
        }

    },
    {
        url: 'grassroots-persons',
        resource: 'GrassrootsPerson',
        custom: {
            csvImport: {
                url: `${endpoint}${version}/grassroots-persons/import`,
                method: 'POST',
            },
        }
    },
    {
        url: 'disciplinary-committee-meetings',
        resource: 'DisciplinaryCommitteeMeeting',
        custom: {
            actual: {
                url: `${endpoint}${version}/disciplinary-committee-meetings/actual`,
                method: 'GET',
            },
        }
    },
    {
        url: 'organisations',
        resource: 'Organisation',
    },
    {
        url: 'team-official-cert-natures',
        resource: 'TeamOfficialCertificationNature',
    },
    {
        url: 'team-official-certs',
        resource: 'TeamOfficialCertification',
    },
    {
        url: 'coaching-courses',
        resource: 'CoachingCourse',
        custom: {
            apply: {
                url: `${endpoint}${version}/coaching-courses/apply/`,
                method: 'GET',
            },
            detach: {
                url: `${endpoint}${version}/coaching-courses/detach-coach/`,
                method: 'POST',
            },
            attachInstructor: {
                url: `${endpoint}${version}/coaching-courses/attach-instructor/`,
                method: 'POST',
            },
            detachInstructor: {
                url: `${endpoint}${version}/coaching-courses/detach-instructor/`,
                method: 'POST',
            },
        }
    },
    {
        url: 'coaching-literatures',
        resource: 'CoachingLiterature',
    },
    {
        url: 'coaching-instructors',
        resource: 'CoachingEducationInstructor',
    },
    {
        url: 'course-instructors',
        resource: 'CourseInstructor',
    },
    {
        url: 'coaching-statements',
        resource: 'CoachingStatement',
    },
    {
        url: 'grassroots-monthly-reports',
        resource: 'GrassrootsMonthlyReport',
        custom: {
            confirm: {
                url: `${endpoint}${version}/grassroots-monthly-reports/confirm/`,
                method: 'GET',
            },
            comment: {
                url: `${endpoint}${version}/grassroots-monthly-reports/comment/`,
                method: 'POST',
            },
        }
    },
    {
        url: 'disc-match-official-events',
        resource: 'DisciplinaryMatchOfficialEvent',
        custom: {
            confirm: {
                url: `${endpoint}${version}/disc-match-official-events/next-disciplinary/`,
                method: 'POST',
            }
        }
    },

].forEach(item => {
    if (!item.type) {
        api[item.resource] = {
            list: {
                url: `${endpoint}${version}/${item.url}`,
                method: 'GET',
            },
            create: {
                url: `${endpoint}${version}/${item.url}`,
                method: 'POST',
            },
            update: {
                url: `${endpoint}${version}/${item.url}/`,
                method: 'PUT',
            },
            single: {
                url: `${endpoint}${version}/${item.url}/`,
                method: 'GET',
            },
            delete: {
                url: `${endpoint}${version}/${item.url}/`,
                method: 'DELETE',
            },
            all: {
                url: `${endpoint}${version}/${item.url}/all`,
                method: 'GET',
            },
            search: {
                url: `${endpoint}${version}/${item.url}/search`,
                method: 'GET',
            },
            ...item.custom
        }
    } else if (item.type === 'resource') {
        api[item.resource] = {
            all: {
                url: `${endpoint}${version}/${item.url}/all`,
                method: 'GET',
            },
        }
    }

})

export default api;