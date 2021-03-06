import { TelemetryAutoSyncModes, TelemetryService } from '..';
import { Observable } from 'rxjs';
import { TelemetryAutoSyncService } from './telemetry-auto-sync-service';
import { SharedPreferences } from '../../util/shared-preferences';
import { CourseService } from '../../course';
import { ProfileService } from '../../profile';
import { SdkConfig } from '../../sdk-config';
import { ApiService } from '../../api';
import { DbService } from '../../db';
import { KeyValueStore } from '../../key-value-store';
export declare class TelemetryAutoSyncServiceImpl implements TelemetryAutoSyncService {
    private telemetryService;
    private sharedPreferences;
    private profileService;
    private courseService;
    private sdkConfig;
    private apiService;
    private dbService;
    private keyValueStore;
    private static DOWNLOAD_SPEED_TELEMETRY_SYNC_INTERVAL;
    private shouldSync;
    private static generateDownloadSpeedTelemetry;
    constructor(telemetryService: TelemetryService, sharedPreferences: SharedPreferences, profileService: ProfileService, courseService: CourseService, sdkConfig: SdkConfig, apiService: ApiService, dbService: DbService, keyValueStore: KeyValueStore);
    getSyncMode(): Observable<TelemetryAutoSyncModes | undefined>;
    setSyncMode(mode: TelemetryAutoSyncModes): Observable<void>;
    start(intervalTime: number): Observable<undefined>;
    pause(): void;
    continue(): void;
    private syncAllCourseProgressAndAssessmentEvents;
}
